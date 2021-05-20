#!/usr/bin/env node

//请求commander库
const program = require("commander");
const updateChk = require("../lib/update");
const setMirror = require("../lib/mirror");
// 请求 lib/download.js
const dlTemplate = require("../lib/download");
// 请求 lib/init.js
const initProject = require("../lib/init");

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

// template 下载/更新模板
program
  .command("template")
  .description("Download template from mirror.")
  .action(() => {
    dlTemplate();
  });

// init 初始化项目
program
  .name("js-plugin-cli")
  .usage("<commands> [options]")
  .command("init <project_name>")
  .description("Create a javascript plugin project.")
  .action((project) => {
    initProject(project);
  });

//解析命令行参数
program.parse(process.argv);
