/** @type {import('cz-git').CommitizenGitOptions} */
/* eslint-env node */
module.exports = {
  types: [
    { value: 'build', name: 'build: 编译相关的修改，例如发布版本、对项目构建或者依赖的改动' },
    { value: 'feat', name: 'feat: 新功能' },
    { value: 'fix', name: 'fix: 修补bug' },
    { value: 'docs', name: 'docs: 文档修改' },
    {
      value: 'style',
      name: 'style: 代码格式修改, 注意不是指修改css, 而是例如删除了空格之类的)'
    },
    {
      value: 'refactor',
      name: 'refactor: 重构'
    },
    {
      value: 'perf',
      name: 'perf: 优化相关，比如提升性能、体验'
    },
    { value: 'test', name: 'test:  测试用例修改' },
    {
      value: 'chore',
      name: 'chore: 对生成过程或辅助工具和库（如文档生成）的更改'
    },
    { value: 'config', name: 'config: 配置修改' },
    { value: 'ci', name: 'ci: 持续集成修改' },
    { value: 'revert', name: 'revert: 代码回滚' },
    { value: 'WIP', name: 'WIP: 正在进行的工作' }
  ],

  scopes: [{ name: 'accounts' }, { name: 'admin' }, { name: 'exampleScope' }, { name: 'changeMe' }],

  usePreparedCommit: false, // to re-use commit from ./.git/COMMIT_EDITMSG
  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [

      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择您要提交的变更类型：',
    scope: '\n表明此变更的范围（可选）：',
    // 如果允许自定义范围则为 true
    customScope: '表明此变更的范围：',
    subject: '用简洁的祈使句描述此变更：\n',
    body: '提供更详细的变更描述（可选）。使用 "|" 来换行：\n',
    breaking: '列出任何重大变更（可选）：\n',
    footer: '列出此次变更关闭的任何问题（可选）。例如：#31, #34：\n',
    confirmCommit: '您确定要继续提交上述变更吗？'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  // skipQuestions: ['scope', 'body'],

  // limit subject length
  subjectLimit: 100
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
}
