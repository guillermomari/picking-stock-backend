// En la ruta "/posiciones/deducir" se reciben las cantidades a deducir de cada posición
const deducirCantidadesPosiciones = async (req, res) => {
    try {
      const { cantidades, id_almacen } = req.body;
  
      // Verificamos que la suma de las cantidades no sea mayor que las cantidades disponibles en las posiciones correspondientes
      const posiciones = await Posicion.findAll({
        include: [
          {
            model: Inventario,
            where: { almacen_id: id_almacen },
            attributes: ['id', 'cantidad'],
          },
        ],
      });
  
      let cantidadesValidas = true;
      for (const posicion of posiciones) {
        const cantidadDisponible = posicion.Inventarios[0].cantidad;
        const cantidadDeducir = cantidades[posicion.id] || 0;
        if (cantidadDeducir > cantidadDisponible) {
          cantidadesValidas = false;
          break;
        }
      }
  
      if (!cantidadesValidas) {
        res.status(400).json({ error: 'La cantidad a deducir de una o varias posiciones es mayor que la cantidad disponible' });
        return;
      }
  
      // Actualizamos las cantidades en el inventario correspondiente de cada posición
      for (const posicion of posiciones) {
        const cantidadDeducir = cantidades[posicion.id] || 0;
        const inventario = posicion.Inventarios[0];
        inventario.cantidad -= cantidadDeducir;
        await inventario.save();
      }
  
      res.json({ mensaje: 'Las cantidades fueron deducidas correctamente de las posiciones' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al deducir las cantidades de las posiciones' });
    }
  };
  