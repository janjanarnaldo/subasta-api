/**
 * Comments.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	subject: {
  		type: 'string'
  	},
  	comment: {
  		type: 'string',
  		required: 'true'
  	},
  	p_id: {
  		model: 'product'
  	},
  	u_id: {
  		model: 'user'
  	}
  }

};