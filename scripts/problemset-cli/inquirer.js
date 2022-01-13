const inquirer = require('inquirer');

exports.inquirer = () => {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'cn',
          message: '请输入算法题中文名'
        },
        {
          type: 'input',
          name: 'en',
          message: '请输入算法题英文名'
        },
        {
          type: 'input',
          name: 'url',
          message: '请输入力扣链接'
        },
        {
          type: 'list',
          name: 'difficulty',
          message: '请选择难度',
          default: '简单',
          choices: [
            {
              name: '简单',
              value: '简单'
            },
            {
              name: '中等',
              value: '中等'
            },
            {
              name: '困难',
              value: '困难'
            }
          ]
        }
      ])
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        console.log(err.message);
        reject(err);
      });
  });
};
