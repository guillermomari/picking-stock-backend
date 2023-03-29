const reportData = require('../data/contabilization_report.data');

async function getAllReports(req, res) {
  try {
    const page = req.query.page || 1; 
    const limit = req.query.limit || 10; 
    const offset = (page - 1) * limit; 
    const reports = await reportData.getAllreports(limit,offset);
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getReportById(req, res) {
  try {
    const report = await reportData.getReportyById(req.params.id);
    if (report) {
      res.status(200).json(report);
    } else {
      res.status(404).json({ error: 'Contabilization report not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createReport(req, res) {
  try {
    const report = await reportData.createReport(req.body);
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateReport(req, res) {
  try {
    const report = await reportData.updateReport(req.params.id, req.body);
    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function deleteReport(req, res) {
  try {
    const deletedReport = await reportData.deleteReport(req.params.id);
    res.status(204).end(deletedReport);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllReports,
  getReportById,
  createReport,
  updateReport,
  deleteReport
};
