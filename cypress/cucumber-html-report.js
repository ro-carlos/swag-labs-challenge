const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/CucumberReports/',
	reportPath: 'cypress/CucumberReports/cucumber-htmlreport.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '15'
        },
        device: 'Local test machine',
        platform: {
            name: 'Mac OS',
            version: 'Sonoma 14.1'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Swag labs'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Oct 30th 2023, 18:00 PM COT'},
            {label: 'Execution End Time', value: 'Oct 30th 2023, 15:00 PM COt'}
        ]
    }
});