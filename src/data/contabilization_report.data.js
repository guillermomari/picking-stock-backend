const { ContabilizationReport } = require('../orm/models');

async function getAllreports(limit, offset) {
  return await ContabilizationReport.findAndCountAll({limit,offset});
}

async function getReportyById(id) {
  return await ContabilizationReport.findByPk(id);
}

async function createReport(reportData) {
  return await ContabilizationReport.create(reportData);
}

async function updateReport(id, reportData) {
  const report = await getReportyById(id);
  return await report.update(reportData);
}

async function deleteReport(id) {
  const report = await getReportyById(id);
  return await report.destroy();
}

module.exports = {
  getAllreports,
  getReportyById,
  createReport,
  updateReport,
  deleteReport
};
