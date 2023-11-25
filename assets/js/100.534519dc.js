(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{457:function(s,e,a){"use strict";a.r(e);var t=a(0),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-ssh基本知识"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-ssh基本知识"}},[s._v("#")]),s._v(" 1 SSH基本知识")]),s._v(" "),e("h3",{attrs:{id:"_1-1-ssh是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-ssh是什么"}},[s._v("#")]),s._v(" 1.1 SSH是什么")]),s._v(" "),e("p",[s._v("SSH为Secure Shell的缩写，是一种网络协议，用于加密两台计算机之间的通信，保证不被窃听或篡改，并且支持各种身份验证机制。在事务中，它主要用户保证远程登录贺远程通信的安全，任何网络服务都可以用这个协议来加密。")]),s._v(" "),e("h3",{attrs:{id:"_1-2-ssh架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-ssh架构"}},[s._v("#")]),s._v(" 1.2 SSH架构")]),s._v(" "),e("p",[s._v("SSH的软件架构是C/S模式，即客户端-服务器模式。在这个架构中，SSH软件分成了两个部分：向服务器发出请求的部分，称为客户端，OpenSSH的实现为ssh；接受客户端发出的请求的部分，称为服务器，OpenSSH的实现为sshd。\n其中大写的SSH表示协议，小写的ssh表示客户端软件。\nOpenSSH的客户端是二进制程序ssh。它在Linux/Unix系统的位置是"),e("code",[s._v("/usr/local/bin/ssh")]),s._v("，windows系统的位置是"),e("code",[s._v("/Program Files/OpenSSH/bin/ssh.exe")]),s._v("。Linux系统一般都自带ssh，如果没有则需要自己安装。安装命令如下：")]),s._v(" "),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Ubuntu 和 Debian")]),s._v("\nsudo apt install openssh-client\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CentOS 和 Fedora")]),s._v("\nsudo dnf install openssh-clients\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"_2-ssh登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-ssh登录"}},[s._v("#")]),s._v(" 2 ssh登录")]),s._v(" "),e("h3",{attrs:{id:"_2-1-基本用法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-基本用法"}},[s._v("#")]),s._v(" 2.1 基本用法")]),s._v(" "),e("p",[s._v("远程登录服务器有以下几种方式：")]),s._v(" "),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("ssh hostname "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 没有指定用户名，将使用客户端的当前用户名")]),s._v("\nssh user@hostname "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定用户名")]),s._v("\nssh user@hostname "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p 22 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录端口为22，使用-p可以登录到某一特定的端口。")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("其中"),e("code",[s._v("user")]),s._v("为用户名，"),e("code",[s._v("hostname")]),s._v("为IP地址或域名\n第一次登录时会提示：")]),s._v(" "),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("The authenticity of host "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123.57.47.211 (123.57.47.211)'")]),s._v(" can't be established"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nECDSA key fingerprint is SHA256:iy237yysfCe013/l+kpDGfEG9xxHxm0dnxnAbJTPpG8"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nAre you sure you want to "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("continue")]),s._v(" connecting "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("yes/no/"),e("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[fingerprint]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("?\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("上述这段文字告诉用户，这台服务器的指纹是陌生的，让用户选择是否要继续连接（输入yes或no）。\n所谓“服务器指纹”，指的是 SSH 服务器公钥的哈希值。每台 SSH 服务器都有唯一一对密钥，用于跟客户端通信，其中公钥的哈希值就可以用来识别服务器。")]),s._v(" "),e("p",[s._v("输入yes，然后回车即可。这样会将服务器的信息记录在"),e("code",[s._v("~/.ssh//known_hosts")]),s._v("文件中，然后输入密码即可登录到远程服务器。\n在"),e("code",[s._v("~/.ssh/known_hosts")]),s._v("文件中保存了本机连接过的所有服务器的公钥指纹信息，每次通过ssh连接一台服务器，系统会通过该文件判断当前需要连接的服务器是否为陌生主机。而如果之前ssh登陆过的服务器的密钥发生了更改，那么登录就会收到提示"),e("code",[s._v("Host key verification failed")]),s._v("，由于发生改变了，所以西我们需要删除之前的主机的指纹信息，添加新的。这个可以使用"),e("code",[s._v("ssh-keygen -R <hostname>")]),s._v("来进行删除。")]),s._v(" "),e("p",[s._v("如果我们需要退出登录，输入"),e("code",[s._v("logout")]),s._v("或"),e("code",[s._v("exit")]),s._v("都可以实现，也可以使用快捷键"),e("code",[s._v("Ctrl+d")]),s._v("退出。")]),s._v(" "),e("h3",{attrs:{id:"_2-2-配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-配置文件"}},[s._v("#")]),s._v(" 2.2 配置文件")]),s._v(" "),e("p",[s._v("创建文件"),e("code",[s._v("~/.ssh/config")]),s._v("，此为用户的个人配置文件，其保存相关配置信息。我们可以在文件中输入：")]),s._v(" "),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("Host myServer1\n\tHostName IP地址或域名\n\tUser 用户名\nHost myServer2\n\tHostName IP地址或域名\n\tUser 用户名\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("之后再使用服务器时，就可以直接使用别名"),e("code",[s._v("myServer1")]),s._v("、"),e("code",[s._v("myServer2")]),s._v("进行登录。\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/81bd7b2dd9e54de6bbc088d080df577a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAdW5pcXVlX3B1cnN1aXQ=,size_19,color_FFFFFF,t_70,g_se,x_16",alt:""}}),s._v("\nSSH客户端的全局配置文件为"),e("code",[s._v("/etc/ssh/ssh_config")]),s._v("，其优先级低于用户个人配置文件。除了配置文件，"),e("code",[s._v("~/.ssh")]),s._v("还有一些用户个人的密钥文件和其他文件")]),s._v(" "),e("h3",{attrs:{id:"_2-3-密钥登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-密钥登录"}},[s._v("#")]),s._v(" 2.3 密钥登录")]),s._v(" "),e("ul",[e("li",[e("p",[e("strong",[s._v("创建密钥")]),s._v("\n首先在本台主机上创建密钥，输入"),e("code",[s._v("ssh-keygen")]),s._v("指令，然后一直回车即可。该命令会为本机生成公私钥对，通过密钥来进行远程登录的验证机制使用了密码学中的非对称加密体系。执行命令后，会在"),e("code",[s._v("~/.ssh/")]),s._v("文件夹下生成两个新的文件：")]),s._v(" "),e("ol",[e("li",[e("code",[s._v("id_rsa")]),s._v("：私钥")]),s._v(" "),e("li",[e("code",[s._v("id_rsa.pub")]),s._v("：公钥")])]),s._v(" "),e("p",[s._v("注意，一定要保护好生成的私钥"),e("code",[s._v("id_rsa")]),s._v("，一旦暴露，利用上述指令可以重新生成新的密钥。\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/19c5e9a1a42b45d8ace8d69548fcd918.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAdW5pcXVlX3B1cnN1aXQ=,size_20,color_FFFFFF,t_70,g_se,x_16",alt:""}})])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("免密登录")]),s._v("\n如果想要免密登录某个服务器，我们只需要将刚才生成的公钥保存在需要登录的远程服务器"),e("code",[s._v("~/.ssh/authorized_keys")]),s._v("文件中。例如我想免密登录到"),e("code",[s._v("myServer1")]),s._v("服务器，则将"),e("code",[s._v("~/.ssh/id_rsa.pub")]),s._v("公钥中的内容，复制到"),e("code",[s._v("myServer1")]),s._v("中的"),e("code",[s._v("~/.ssh/authorized_keys")]),s._v("文件中。也可以使用如下命令一键添加公钥：\n"),e("code",[s._v("ssh-copy-id myServer1")]),s._v("。\n第一次应用"),e("code",[s._v("ssh-copy-id")]),s._v("系统会提示输入远程服务器的密码，之后登录时就可以免密登录了。\n"),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/31ab20f00d3a4a12841a4d246f2a7d9c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAdW5pcXVlX3B1cnN1aXQ=,size_20,color_FFFFFF,t_70,g_se,x_16",alt:""}})])])]),s._v(" "),e("p",[s._v("一般来说，应用密钥登录比使用密码登录更加安全，所以启用密钥登录之后，最好关闭服务器的密码登录。如果需要在远程服务器上关闭密码登录。具体方法是先远程登录到服务器中，然后找到sshd的配置文件"),e("code",[s._v("/etc/ssh/sshd_config")]),s._v("，最后将"),e("code",[s._v("PasswordAuthentication")]),s._v("这一项设置为"),e("code",[s._v("no")]),s._v("。\n"),e("code",[s._v("PasswordAuthentication no")]),s._v("\nsshd是服务器运行的后台进程，当我们修改配置文件以后，需要重新启动sshd，然后修改才能生效。可应用下面语句重启远程服务器上的"),e("code",[s._v("ssh")]),s._v("和"),e("code",[s._v("sshd")]),s._v("服务。")]),s._v(" "),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("sudo systemctl restart ssh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service\nsudo systemctl restart sshd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[e("strong",[s._v("执行远程命令")]),s._v("\n免密登录后，我们可以在命令行下直接执行远程命令："),e("code",[s._v("ssh user@hostname command")]),s._v("。这样的命令会使SSH在登录成功后，立刻在远程主机上执行命令"),e("code",[s._v("comand")]),s._v("。但并不是真正的登录，执行完命令后还在原主机。\n测试："),e("code",[s._v("ssh myServer1 ls")]),s._v(" "),e("img",{attrs:{src:"https://img-blog.csdnimg.cn/2f5876c7802840d48072d1687b483a4c.png",alt:""}})])]),s._v(" "),e("h2",{attrs:{id:"_3-scp传文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-scp传文件"}},[s._v("#")]),s._v(" 3 scp传文件")]),s._v(" "),e("h3",{attrs:{id:"_3-1-scp命令简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-scp命令简介"}},[s._v("#")]),s._v(" 3.1 scp命令简介")]),s._v(" "),e("p",[e("code",[s._v("scp")]),s._v("是secure copy的缩写，相当于"),e("code",[s._v("cp")]),s._v("命令+SSH。它的底层是SSH协议，默认端口是22，相当于先使用"),e("code",[s._v("ssh")]),s._v("命令登录远程主机，然后再进行拷贝操作。\n"),e("code",[s._v("scp")]),s._v("主要用于以下三种复制操作：")]),s._v(" "),e("ul",[e("li",[s._v("本地复制到远程。")]),s._v(" "),e("li",[s._v("远程复制到本地。")]),s._v(" "),e("li",[s._v("两个远程系统之间的复制。")])]),s._v(" "),e("p",[s._v("使用"),e("code",[s._v("scp")]),s._v("传输数据时，文件和密码都是加密的，不会泄露敏感信息。")]),s._v(" "),e("h3",{attrs:{id:"_3-2-基本语法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-基本语法"}},[s._v("#")]),s._v(" 3.2 基本语法")]),s._v(" "),e("p",[e("code",[s._v("scp")]),s._v("的语法类似"),e("code",[s._v("cp")]),s._v("的语法。")]),s._v(" "),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("scp source destination\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面命令中，"),e("code",[s._v("source")]),s._v("是文件当前的位置，"),e("code",[s._v("destination")]),s._v("是文件所要复制到的位置。它们都可以包含用户名和主机名。例如：")]),s._v(" "),e("div",{staticClass:"language-powershell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-powershell"}},[e("code",[s._v("scp myServer1:main"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cpp")]),s._v(" main"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cpp")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")]),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("上面命令即是将远程主机（myServer1）用户主目录下的"),e("code",[s._v("main.cpp")]),s._v("复制为本机当前目录下的"),e("code",[s._v("main.cpp")]),s._v("。注意主机与文件之间要使用"),e("code",[s._v(":")]),s._v("分隔。\n"),e("code",[s._v("scp")]),s._v("会先用SSH登录到远程主机，然后在加密连接之中复制文件。客户端发起连接后，会提示用户输入密码。其中用户名和主机名若省略则是代表当前主机下的当前用户名。")]),s._v(" "),e("p",[e("code",[s._v("scp")]),s._v("支持一次复制多个文件。"),e("code",[s._v("scp source1 source2 destination")]),s._v("。如果存在同名文件，"),e("code",[s._v("scp")]),s._v("会在没有警告的情况下覆盖同名文件。")]),s._v(" "),e("h2",{attrs:{id:"_4-参考文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考文献"}},[s._v("#")]),s._v(" 4 参考文献")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://www.acwing.com/activity/content/57/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux基础课"),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://www.runoob.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("菜鸟教程"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);