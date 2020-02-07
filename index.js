'use strict';
const Core = require('@alicloud/pop-core');

const requestOption = {
  method: 'POST'
};

module.exports = function(config) {
  if (!config || !config.accessKeyId || !config.accessKeySecret) {
    throw new Error('need accessKeyId and accessKeySecret');
  }

  let core = new Core({
    accessKeyId: config.accessKeyId,
    accessKeySecret: config.accessKeySecret,
    endpoint: 'https://dypnsapi.aliyuncs.com',
    apiVersion: '2017-05-25'
  });
  
  let params = {
    RegionId: config.regionId || 'cn-hangzhous'
  };

  let client = {};
  client.getMobile = async function() {
    try {
      let res = await core.request('GetMobile', params, requestOption);
      return res; 
    } catch (e) {
      throw new Error(e.message);
    }
  };

  client.verifyMobile = async function() {
    try {
      let res = await core.request('VerifyMobile', params, requestOption);
      return res; 
    } catch (e) {
      throw new Error(e.message);
    }
  };
};