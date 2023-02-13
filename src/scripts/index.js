import {
  isCSV,
  hasTimeField,
  getLogExample,
  isValidField,
} from './helpers/helper.js';
import { Chart } from './chart.js';
import { createStats } from './stats.js';
import { createButtons, addUpdateByField } from './fieldButtons.js';
import { createAddSelectorBtn } from './lineSelectors.js';

//Remove form so buttons and graph can be displayed
function removeForm() {
  document.querySelector('.form-container').remove();
  let loader;
  if ((loader = document.querySelector('.loader-wrapper'))) loader.remove();

  document.querySelector('.header').remove();
}

//Add an alert if there isn't one
function addAlert(message) {
  if (document.querySelector('.form-alert') != null) {
    document.querySelector('.form-alert').innerHTML = message;
    return;
  }

  let alert = document.createElement('h3');
  alert.innerHTML = message;
  alert.classList.add('form-alert');
  document.querySelector('.third-step').appendChild(alert);
}

function reloadFieldsList() {
  console.log('oi');
}

function createContainers() {
  document.querySelector('main').classList.remove('aligned');

  let container = document.createElement('div');
  container.classList.add('field-container');
  document.querySelector('main').appendChild(container);

  let title = document.createElement('h4');
  title.innerHTML = 'FIELDS';
  title.classList.add('field-container-title');
  document.querySelector('.field-container').appendChild(title);

  let fieldSearchInput = document.createElement('input');
  fieldSearchInput.type = 'text';
  fieldSearchInput.placeholder = 'Search by field';
  fieldSearchInput.classList.add('field-search-input');
  fieldSearchInput.addEventListener('input', reloadFieldsList);
  document.querySelector('.field-container').appendChild(fieldSearchInput);

  container = document.createElement('div');
  container.classList.add('btn-container');
  document.querySelector('.field-container').appendChild(container);

  container = document.createElement('div');
  container.classList.add('report-container');
  document.querySelector('main').appendChild(container);

  container = document.createElement('div');
  container.classList.add('stats-container');
  document.querySelector('.report-container').appendChild(container);

  container = document.createElement('div');
  container.classList.add('selector-container');
  document.querySelector('.report-container').appendChild(container);

  container = document.createElement('div');
  container.classList.add('selector-btn-container');
  document.querySelector('.selector-container').appendChild(container);

  container = document.createElement('div');
  container.classList.add('chart-container');
  document.querySelector('.report-container').appendChild(container);
}

function createRepositoryButtons() {
  let bugReportLink = document.createElement('a');
  bugReportLink.setAttribute(
    'href',
    'https://github.com/leo-holanda/logcharts.io/issues/new'
  );
  bugReportLink.setAttribute('target', '_blank');
  bugReportLink.classList.add('repo-btn-link');

  let bugIcon = document.createElement('span');
  bugIcon.classList.add('material-icons-round');
  bugIcon.textContent = 'bug_report';

  let bugReportBtnTitle = document.createElement('span');
  bugReportBtnTitle.textContent = 'Report a bug';

  let bugReportBtn = document.createElement('button');
  bugReportBtn.appendChild(bugIcon);
  bugReportBtn.appendChild(bugReportBtnTitle);
  bugReportBtn.setAttribute('type', 'button');
  bugReportBtn.classList.add('repo-btn');

  bugReportLink.appendChild(bugReportBtn);
  document.querySelector('.field-container').appendChild(bugReportLink);

  let repoLink = document.createElement('a');
  repoLink.setAttribute('href', 'https://github.com/leo-holanda/logcharts.io');
  repoLink.setAttribute('target', '_blank');
  repoLink.classList.add('repo-btn-link');

  let gitHubIcon = document.createElement('span');
  gitHubIcon.classList.add('material-icons-round');
  gitHubIcon.textContent = 'star';

  let repoBtnTitle = document.createElement('span');
  repoBtnTitle.textContent = 'Star the GitHub Repo';

  let repoBtn = document.createElement('button');
  repoBtn.appendChild(gitHubIcon);
  repoBtn.appendChild(repoBtnTitle);
  repoBtn.setAttribute('type', 'button');
  repoBtn.classList.add('repo-btn');

  repoLink.appendChild(repoBtn);
  document.querySelector('.field-container').appendChild(repoLink);
}

function createChart(results, defaultField) {
  removeForm();
  createContainers();
  createButtons(results.meta.fields, defaultField);
  createRepositoryButtons();
  addUpdateByField();
  createAddSelectorBtn();
  createStats(results.data, defaultField);

  chart = new Chart({
    container: document.querySelector('.chart-container'),
    parsedLog: results.data,
    defaultField: defaultField,
  });

  chart.draw();
}

function addDefaultFieldForm(results) {
  const container = document.querySelector('.third-step');
  container.querySelector('#form').remove();

  const fieldFormTitle = document.createElement('h1');
  fieldFormTitle.textContent = 'Please, select the default field';
  container.appendChild(fieldFormTitle);

  const fieldForm = document.createElement('form');
  const select = document.createElement('select');
  for (let field of results.meta.fields) {
    if (isValidField(field)) {
      let option = document.createElement('option');
      option.setAttribute('value', field);
      option.textContent = field;
      select.appendChild(option);
    }
  }

  const fieldFormBtn = document.createElement('button');
  fieldFormBtn.textContent = 'Create chart';
  fieldFormBtn.setAttribute('type', 'button');
  fieldFormBtn.addEventListener('click', () => {
    createChart(results, select.value);
  });

  fieldForm.appendChild(select);
  fieldForm.appendChild(fieldFormBtn);
  container.appendChild(fieldForm);
}

// When user sends csv or click on example button...
document.getElementById('log_input').addEventListener('change', showUserLog);
document.getElementById('example').addEventListener('click', showExample);

function showUserLog() {
  let log = document.getElementById('log_input').files[0];
  if (!isCSV(log)) return addAlert('Please upload only CSV files!');
  handleLog(log);
}

async function showExample() {
  handleLog(await getLogExample());
}

export let chart = undefined;
function handleLog(log) {
  // Parse the csv and process the results
  Papa.parse(log, {
    header: true,
    encoding: 'latin3', // Important for degree symbol
    skipEmptyLines: true,
    transformHeader: function(header) {
      return header.replace('�', '°');
    },
    complete: function(results) {
      if (hasTimeField(results.meta.fields)) {
        addDefaultFieldForm(results);
      } else {
        addAlert('Please send only logs from HWInfo!');
      }
    },
  });
}
