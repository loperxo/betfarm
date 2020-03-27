import Joi from 'joi';

const form = {
	data() {
		return {
			loading: false,
			issues: {},
			message: null,
			valid: false
		};
	},
	mounted() {
		this.clearErrors();
		this.clearFormField();
	},
	methods: {
		/**
         * Clear the form issues
         */
		clearErrors(field = null) {
			if (!field) {
				this.issues = {};
			} else {
				delete this.issues[field];
			}
		},
		/**
         * Clear tge form field.
         */
		clearFormField() {
			Object.keys(this.itemData).forEach((key) => {
				this.itemData[key] = '';
			});
		},
		/**
         * Validate form data
         */
		validate(value, schema) {
			const result = Joi.validate(value, schema, { abortEarly: false });
			if (result.error) {
				result.error.details.forEach((error) => {
					this.issues[error.path[0]] = error.message;
				});
				return false;
			}
			return true;
		}
	}
};

export default form;
