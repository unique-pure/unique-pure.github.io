(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{461:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-适配器模式介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-适配器模式介绍"}},[s._v("#")]),s._v(" 1 适配器模式介绍")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/b833aba52d5a779a04c7488e5d964277-20231125211243243.png",alt:"image-20220422215001021"}})]),s._v(" "),a("p",[s._v("在现实生活中生活用电220V和笔记电脑20V不兼容，我们需要引入 AC Adapter（交流电适配器），在软件开发中我们也会存在不兼容的结构，这个时候就需要引入适配器模式。")]),s._v(" "),a("p",[s._v("适配器模式（Adapter Pattern）可以将一个类的接口和另一个类的接口匹配起来，而无需修改原来的适配者接口和抽象目标接口。")]),s._v(" "),a("p",[a("font",{attrs:{color:"red"}},[s._v("它将一个类的接口转换称客户希望的另一个接口，让那些接口不兼容的类可以一起工作。")])],1),s._v(" "),a("p",[s._v("适配器模式的别名为包装器模式（Wrapper Pattern），它既可以作为类结构模式，也可以作为对象结构型模式。在适配器模式的定义中所提及的接口是指广义的接口，它可以表示为方法或者方法的集合。")]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("主要解决：")]),s._v(' 主要解决在软件系统中，常常要将一些"现存的对象"放到新的环境中，而新环境要求的接口是现对象不能满足的。')]),s._v(" "),a("p",[a("strong",[s._v("何时使用：")]),s._v(" 1、系统需要使用现有的类，而此类的接口不符合系统的需要。 2、想要建立一个可以重复使用的类，用于与一些彼此之间没有太大关联的一些类，包括一些可能在将来引进的类一起工作，这些源类不一定有一致的接口。 3、通过接口转换，将一个类插入另一个类系中。（比如老虎和飞禽，现在多了一个飞虎，在不增加实体的需求下，增加一个适配器，在里面包容一个虎对象，实现飞的接口。）")]),s._v(" "),a("p",[a("strong",[s._v("如何解决：")]),s._v(" 继承或依赖（推荐）。")]),s._v(" "),a("p",[a("strong",[s._v("关键代码：")]),s._v(" 适配器继承或依赖已有的对象，实现想要的目标接口。")]),s._v(" "),a("p",[a("strong",[s._v("应用实例：")]),s._v(" 1、美国电器 110V，中国 220V，就要有一个适配器将 110V 转化为 220V。 2、JAVA JDK 1.1 提供了 Enumeration 接口，而在 1.2 中提供了 Iterator 接口，想要使用 1.2 的 JDK，则要将以前系统的 Enumeration 接口转化为 Iterator 接口，这时就需要适配器模式。 3、在 LINUX 上运行 WINDOWS 程序。 4、JAVA 中的 jdbc。")]),s._v(" "),a("p",[a("strong",[s._v("优点：")]),s._v(" 1、可以让任何两个没有关联的类一起运行。 2、提高了类的复用。 3、增加了类的透明度。 4、灵活性好。")]),s._v(" "),a("p",[a("strong",[s._v("缺点：")]),s._v(" 1、过多地使用适配器，会让系统非常零乱，不易整体进行把握。比如，明明看到调用的是 A 接口，其实内部被适配成了 B 接口的实现，一个系统如果太多出现这种情况，无异于一场灾难。因此如果不是很有必要，可以不使用适配器，而是直接对系统进行重构。 2.由于 JAVA 至多继承一个类，所以至多只能适配一个适配者类，而且目标类必须是抽象类。")]),s._v(" "),a("p",[a("strong",[s._v("使用场景：")]),s._v(" 有动机地修改一个正常运行的系统的接口，这时应该考虑使用适配器模式。")]),s._v(" "),a("p",[a("strong",[s._v("注意事项：")]),s._v(" 适配器不是在详细设计时添加的，而是解决正在服役的项目的问题。")])]),s._v(" "),a("h2",{attrs:{id:"_2-适配器模式详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-适配器模式详解"}},[s._v("#")]),s._v(" 2 适配器模式详解")]),s._v(" "),a("h3",{attrs:{id:"_2-1-适配器模式结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-适配器模式结构"}},[s._v("#")]),s._v(" 2.1 适配器模式结构")]),s._v(" "),a("p",[s._v("类适配器模式的结构图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/ef6ae55bab0ce79b1d62d9aab38cd62f-20231125211249068.png",alt:"image-20220423235933375"}})]),s._v(" "),a("p",[s._v("对象适配器模式的结构图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/c4a91f039a8904ea70d69c2ac37fe206.png",alt:"image-20220424000012210"}})]),s._v(" "),a("p",[s._v("由上图可知，适配器模式包含以下3个角色。")]),s._v(" "),a("ol",[a("li",[s._v("Target（目标抽象类）：目标抽象类定义客户所需的接口，可以是一个抽象类或者接口，也可以是具体类。在类适配器中，由于Java语言不支持多重继承，它只能是接口。")]),s._v(" "),a("li",[s._v("Adapter（适配器类）：它可以调用另一个接口 ，作为一个转换器，对Adaptee和Target进行适配。适配器Adapter是适配器模式的核心，在类适配器中，它通过实现Target接口并继承Adaptee类来使二者产生联系，在对象适配器中，它通过继承Target并关联一个Adaptee对象来使二者产生联系。")]),s._v(" "),a("li",[s._v("Adaptee（适配者类）：适配者即被适配的角色，它定义了一个已经存在的接口，这个接口需要适配，适配者类一般是一个具体的类，包含了客户希望使用的业务方法，在某些情况下甚至没有适配者类的代码。")])]),s._v(" "),a("h3",{attrs:{id:"_2-2-适配器模式实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-适配器模式实现"}},[s._v("#")]),s._v(" 2.2 适配器模式实现")]),s._v(" "),a("h4",{attrs:{id:"_2-2-1-类适配器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-类适配器"}},[s._v("#")]),s._v(" 2.2.1 类适配器")]),s._v(" "),a("p",[s._v("根据上图，在类适配器中适配者类Adaptee没有request方法，而客户端期待这个方法，但在适配者类中实现了specificRequest()方法，该方法提供的实现正式客户端所需要的。"),a("font",{attrs:{color:"red"}},[s._v("为了使客户端能够使用适配者类，提供了一个中间类，即适配器类Adapter，适配器类实现了抽象目标类接口Target，并继承了适配者类，在适配器类的request()方法中调用所继承的适配者类的specificRequest()方法，达到了适配的目的。")])],1),s._v(" "),a("p",[s._v("因为适配器类与适配者类使继承关系，所以这种适配器模式称为类适配器模式。典型的类适配器代码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adapter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adaptee")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Target")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("specificRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h4",{attrs:{id:"_2-2-2-对象适配器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-对象适配器"}},[s._v("#")]),s._v(" 2.2.2 对象适配器")]),s._v(" "),a("p",[s._v("根据上图，在对象适配器中适配者类Adaptee没有request方法，而客户端期待这个方法，但在适配者类中实现了specificRequest()方法，该方法提供的实现正式客户端所需要的。为了使客户端能够使用适配者类，需要提供一个包装类Adapter，即适配器类。")]),s._v(" "),a("p",[s._v("这个包装类包装了一个适配者的实例，从而将客户端与适配者衔接起来，在适配器的request()方法中调用适配者的specificRequest()方法。")]),s._v(" "),a("p",[s._v("因为适配器类与适配者类是关联关系，所以这种适配器模式称为对象适配器模式。典型的对象适配器代码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adapter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Target")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 维持一个对适配者对象的引用")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adaptee")]),s._v(" adaptee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adapter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adaptee")]),s._v(" adaptee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("adaptee "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" adaptee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 转发调用")]),s._v("\n        adaptee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("specificRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"_2-3-适配器模式应用举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-适配器模式应用举例"}},[s._v("#")]),s._v(" 2.3 适配器模式应用举例")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("题目描述")])]),s._v(" "),a("blockquote",[a("p",[s._v("某公司欲开发一款儿童玩具汽车，为了更好地吸引小朋友的注意力，该玩具汽车在移动过程中伴随着灯光闪烁和声音提示。在该公司以往的产品中已经实现了控制灯光闪烁（例如警灯闪烁）和声音提示（例如警笛音效）的程序，为了重用先前的代码并且使得汽车控制软件具有更好的灵活性和扩展性，现使用适配器模式设计该玩具汽车控制软件。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("UML类图")])]),s._v(" "),a("p",[s._v("使用对象适配器模式来实现，其UML类图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/fe3c7c70cabdff83879a158ba1f3d214-20231125211259811.png",alt:"image-20220424183227232"}})]),s._v(" "),a("p",[s._v("其中，CarController类充当抽象目标，PoliceSound和PoliceLamp类充当适配者，PoliceCarAdapter充当适配器。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("代码")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/unique-pure/designpattern_code/tree/main/src/adapter_pattern/object_adapter",target:"_blank",rel:"noopener noreferrer"}},[s._v("代码地址"),a("OutboundLink")],1)])])]),s._v(" "),a("h2",{attrs:{id:"_3-缺省适配器模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-缺省适配器模式"}},[s._v("#")]),s._v(" 3 缺省适配器模式")]),s._v(" "),a("p",[s._v("缺省适配器模式(Default Adapter Pattern)：当不需要实现一个接口所提供的所有方法时，可先设计一个抽象类实现该接口，并为接口中每个方法提供一个默认实现（空方法），那么该抽象类的子类可以选择性地覆盖父类的某些方法来实现需求，它适用于不想使用一个接口中的所有方法的情况，又称为单接口适配器模式。其结构图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/bcfad8998fb4a4f6edd2269ce17e14ad.png",alt:"image-20220424094138258"}})]),s._v(" "),a("p",[s._v("由上图可知，在缺省适配器模式中包含以下3个角色：")]),s._v(" "),a("ol",[a("li",[s._v("ServiceInterface（适配者接口）：它是一个接口，通常在接口中声明了大量的方法。")]),s._v(" "),a("li",[s._v("AbstractServiceClass（缺省适配器类）：它是缺省适配器模式的核心类，使用空方法的形式实现了在ServiceInterface接口中声明的方法。通常将它定义为抽象类，因为对它进行实例化没有任何意义。")]),s._v(" "),a("li",[s._v("ConcreteServiceClass（具体业务类）：它是缺省适配器类的子类，在没有引入适配器之前它需要实现适配者接口，因此需要实现在适配者接口中定义的所有方法，而对于一些无须使用的方法不得不提供空实现。在有了缺省适配器之后可以直接继承该适配者类，根据需要有选择性地覆盖在适配器类中定义的方法。")])]),s._v(" "),a("p",[s._v("缺省适配器类的典型代码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AbstractServiceClass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ServiceInterface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("serviceMethod1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//空方法")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("serviceMethod2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//空方法")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("serviceMethod3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//空方法")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"_4-双向适配器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-双向适配器"}},[s._v("#")]),s._v(" 4 双向适配器")]),s._v(" "),a("p",[s._v("在对象适配器的使用过程中，如果在适配器中同时包含对目标类和适配者类的引用，适配者可以通过它调用目标类中的方法，目标类也可以通过它调用适配者类的方法，那么该适配器就是一个双向适配器。其结构图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/70a63549103f1c8e28e7ac3adb8cd8d8-20231125211308022.png",alt:"image-20220424095546821"}})]),s._v(" "),a("p",[s._v("其典型代码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adapter")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Target")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adaptee")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 同时维持对抽象目标类和适配者类的引用")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Target")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adaptee")]),s._v(" adaptee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adapter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Target")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("target "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adapter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Adaptee")]),s._v(" adaptee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("adaptee "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" adaptee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        adaptee"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("specificRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("specificRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);