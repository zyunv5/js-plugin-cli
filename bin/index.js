#!/usr/bin/env node

//请求commander库
const program = require("commander");
const updateChk = require("../lib/update");
const setMirror = require("../lib/mirror");

//从package.json文件中请求version字段的值，-v和--version是参数
program.version(require("../package.json").version, "-v,--version");

program
  .command("upgrade")
  .description("Check the js-plugin-cli version.")
  .action(() => {
    updateChk();
  });

//mirror切换镜像
program
  .command("mirror <template_mirror>")
  .description("Set the template mirror.")
  .action((tplMirror) => {
    setMirror(tplMirror);
  });

//解析命令行参数
program.parse(process.argv);
