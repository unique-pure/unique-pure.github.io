(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{437:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"_1-模板方法模式介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-模板方法模式介绍"}},[s._v("#")]),s._v(" 1 模板方法模式介绍")]),s._v(" "),t("p",[s._v("在软件开发中，某个方法的实现需要多个步骤，其中有些步骤是固定的，而有些步骤并不固定，存在可变性。为了提高代码的复用性和系统的灵活性，可以使用一种称为模板方法模式（Template Method Pattern）的设计模式来对这类情况进行设计。"),t("font",{attrs:{color:"red"}},[s._v("在模板方法模式中将实现功能的每一个步骤所对应的方法称为基本方法，而将调用这些基本方法同时定义基本方法的执行次序的方法称为模板方法。")])],1),s._v(" "),t("p",[s._v("模板方法模式定义一个操作中算法的框架，而将一些步骤延迟到子类中。模板方法模式使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤。它是结构最简单的行为型设计模式，在其结构中只存在父类与子类的继承关系。")]),s._v(" "),t("p",[s._v("模板方法模式将一些复杂流程的实现步骤封装在一系列基本方法中，在抽象父类中提供一个称之为模板方法的方法来定义这些基本方法的执行次序，而通过其子类来覆盖某些步骤，从而使得相同的算法框架可以有不同的执行结果。")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("主要解决：")]),s._v(" 一些方法通用，却在每一个子类都重新写了这一方法。")]),s._v(" "),t("p",[t("strong",[s._v("何时使用：")]),s._v(" 有一些通用的方法。")]),s._v(" "),t("p",[t("strong",[s._v("如何解决：")]),s._v(" 将这些通用算法抽象出来。")]),s._v(" "),t("p",[t("strong",[s._v("关键代码：")]),s._v(" 在抽象类实现，其他步骤在子类实现。")]),s._v(" "),t("p",[t("strong",[s._v("应用实例：")]),s._v(" 1、在造房子的时候，地基、走线、水管都一样，只有在建筑的后期才有加壁橱加栅栏等差异。 2、西游记里面菩萨定好的 81 难，这就是一个顶层的逻辑骨架。 3、spring 中对 Hibernate 的支持，将一些已经定好的方法封装起来，比如开启事务、获取 Session、关闭 Session 等，程序员不重复写那些已经规范好的代码，直接丢一个实体就可以保存。")]),s._v(" "),t("p",[t("strong",[s._v("优点：")]),s._v(" 1、封装不变部分，扩展可变部分。 2、提取公共代码，便于维护。 3、行为由父类控制，子类实现。")]),s._v(" "),t("p",[t("strong",[s._v("缺点：")]),s._v(" 每一个不同的实现都需要一个子类来实现，导致类的个数增加，使得系统更加庞大。")]),s._v(" "),t("p",[t("strong",[s._v("使用场景：")]),s._v(" 1、有多个子类共有的方法，且逻辑相同。 2、重要的、复杂的方法，可以考虑作为模板方法。")]),s._v(" "),t("p",[t("strong",[s._v("注意事项：")]),s._v(" 为防止恶意操作，一般模板方法都加上 final 关键词。")])]),s._v(" "),t("h2",{attrs:{id:"_2-模板方法模式详解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-模板方法模式详解"}},[s._v("#")]),s._v(" 2 模板方法模式详解")]),s._v(" "),t("h3",{attrs:{id:"_2-1-模板方法模式结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-模板方法模式结构"}},[s._v("#")]),s._v(" 2.1 模板方法模式结构")]),s._v(" "),t("p",[s._v("模板方法模式的结构比较简单，其核心是抽象类和其中的模板方法设计，其结构图如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/2c3f9caef65b6b6fd3a8e6da12fb0011.png",alt:"image-20220501124825794"}})]),s._v(" "),t("p",[s._v("由上图可知，模板方法模式包含以下两个角色。")]),s._v(" "),t("ol",[t("li",[s._v("AbstractClass（抽象类）：在抽象类中定义了一系列基本操作（Primitive Operations），这些基本操作可以是具体的，也可以是抽象的，每一个基本操作对应算法的一个步骤，在其子类中可以重定义或实现这些步骤。"),t("font",{attrs:{color:"red"}},[s._v("同时在抽象类中实现了一个模板方法（Template Method），用于定义一个算法的框架，模板方法不仅可以调用在抽象类中实现的基本方法，也可以调用在抽象类的子类中实现的基本方法，还可以调用其他对象中的方法。")])],1),s._v(" "),t("li",[s._v("ConcreteClass（具体子类）：它是抽象类的子类，用于实现在父类中声明的抽象基本操作以及完成子类特定算法的步骤，也可以覆盖在父类中已经实现的具体基本操作。")])]),s._v(" "),t("h3",{attrs:{id:"_2-2-模板方法模式实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-模板方法模式实现"}},[s._v("#")]),s._v(" 2.2 模板方法模式实现")]),s._v(" "),t("p",[s._v("在实现模板方法模式时，开发抽象类的软件设计师和开发具体子类的软件设计师之间可以进行协作。")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("模板方法")])]),s._v(" "),t("p",[s._v("一个模板方法就是将定义在抽象类中的把基本操作方法组合在一起形成一个总算法或一个总行为的方法。这个模板方法定义在抽象类中，并由子类不加修改地完全继承下来。"),t("font",{attrs:{color:"red"}},[s._v("由于模板方法是具体方法，因此模板方法模式中的抽象层只能是抽象类，而不是接口。")])],1)]),s._v(" "),t("li",[t("p",[t("strong",[s._v("基本方法")])]),s._v(" "),t("p",[s._v("基本方法是实现算法各个步骤的方法，是模板方法的组成部分。基本方法又可以分为3种，即抽象方法（Abstract Method）、具体方法（Concrete Method）和钩子方法（Hook Method）。")]),s._v(" "),t("ul",[t("li",[s._v("抽象方法：一个抽象方法由抽象类声明、由其具体子类实现。")]),s._v(" "),t("li",[s._v("具体方法：一个具体方法由一个抽象类或具体类声明并实现，其子类可以进行覆盖也可以直接继承。")]),s._v(" "),t("li",[s._v("钩子方法：一个钩子方法由一个抽象类或具体类声明并实现，而其子类可能会加以扩展。通常在父类中给出的实现是一个空实现，并以该空实现作为方法的默认实现。当然，钩子方法也可以提供一个非空的默认实现。")])]),s._v(" "),t("p",[s._v("抽象类的典型代码如下：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractClass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//模板方法")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("templateMethod")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("primitiveOperation1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("primitiveOperation2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("primitiveOperation3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//基本方法—具体方法")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("primitiveOperation1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//实现代码")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//基本方法—抽象方法")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("primitiveOperation2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("    \n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//基本方法—钩子方法")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("primitiveOperation3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   \n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br")])]),t("p",[s._v("具体子类的典型代码如下：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConcreteClass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractClass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("primitiveOperation2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//实现代码")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("primitiveOperation3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//实现代码")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])]),s._v(" "),t("h3",{attrs:{id:"_2-3-模板方法模式应用举例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-模板方法模式应用举例"}},[s._v("#")]),s._v(" 2.3 模板方法模式应用举例")]),s._v(" "),t("ul",[t("li",[t("p",[t("strong",[s._v("题目描述")])]),s._v(" "),t("blockquote",[t("p",[s._v("某软件公司要为某银行的业务支撑系统开发一个利息计算模块，利息的计算流程如下：\n(1) 系统根据账号和密码验证用户信息，如果用户信息错误，则系统显示出错提示。\n(2) 如果用户信息正确，则根据用户类型的不同使用不同的利息计算公式计算利息（如活期账户和定期账户具有不同的利息计算公式）。\n(3) 系统显示利息。\n现使用模板方法模式设计该利息计算模块。")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("UML类图")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/8c3bfccb6c21e21919fdc3cc86785f4a.png",alt:"image-20220501131411473"}})]),s._v(" "),t("p",[s._v("其中，Account充当抽象类角色，CurrentAccount和SavingAccount充当具体子类角色。")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("代码")])]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/unique-pure/designpattern_code/tree/main/src/template_method_pattern",target:"_blank",rel:"noopener noreferrer"}},[s._v("代码地址"),t("OutboundLink")],1)])])])])}),[],!1,null,null,null);t.default=e.exports}}]);