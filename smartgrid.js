const smartgrid = require('smart-grid');

const settings = {
	columns: 12,
	offset: '10px',
	container: {
		maxWidth: '1280',
		fields: '30px'
	},
	breakPoints: {
		md: {
			width: '992px',
			fields: '20px'
		},
		sm: {
			width: '720px',
			fields: '15px'
		},
		xs: {
			width: '576px',
			fields: '10px'
		},
		xxs: {
			width: '380px',
			fields: '10px'
		}
	},
	oldSizeStyle: false,
	properties: []
};

smartgrid('./src/precss/', settings);