(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{434:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-观察者模式介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-观察者模式介绍"}},[s._v("#")]),s._v(" 1 观察者模式介绍")]),s._v(" "),a("p",[s._v("“红灯停，绿灯行”。在这个过程中，交通信号灯是汽车的观察目标，而汽车则是观察者。随着交通信号灯的变化，汽车的行为也随之变化，一盏交通信号灯可以指挥多辆汽车。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/7bbcdbf54bdfbe3b781f717872a93242-20231125212711452.png",alt:"image-20220430155302091"}})]),s._v(" "),a("p",[s._v("在软件系统中有些对象之间也存在类似交通信号灯和汽车之间的关系，一个对象的状态或行为的变化将导致其他对象的状态或行为也发生改变。观察者模式（Observer Pattern）则是用于建立一种对象与对象之间的依赖关系，使得每当一个对象状态发生改变时其相关依赖对象皆得到通知并被自动更新。发生改变的对象称为观察目标，被通知的对象称为观察者，一个观察目标可以对应多个观察者。它有如下别名：")]),s._v(" "),a("ul",[a("li",[s._v("发布-订阅(Publish/Subscribe)模式")]),s._v(" "),a("li",[s._v("模型-视图(Model/View)模式")]),s._v(" "),a("li",[s._v("源-监听器(Source/Listener)模式")]),s._v(" "),a("li",[s._v("从属者(Dependents)模式")])]),s._v(" "),a("blockquote",[a("p",[a("strong",[s._v("主要解决：")]),s._v(" 一个对象状态改变给其他对象通知的问题，而且要考虑到易用和低耦合，保证高度的协作。")]),s._v(" "),a("p",[a("strong",[s._v("何时使用：")]),s._v(" 一个对象（目标对象）的状态发生改变，所有的依赖对象（观察者对象）都将得到通知，进行广播通知。")]),s._v(" "),a("p",[a("strong",[s._v("如何解决：")]),s._v(" 使用面向对象技术，可以将这种依赖关系弱化。")]),s._v(" "),a("p",[a("strong",[s._v("关键代码：")]),s._v(" 在抽象类里有一个 ArrayList 存放观察者们。")]),s._v(" "),a("p",[a("strong",[s._v("应用实例：")]),s._v(" 1、拍卖的时候，拍卖师观察最高标价，然后通知给其他竞价者竞价。 2、西游记里面悟空请求菩萨降服红孩儿，菩萨洒了一地水招来一个老乌龟，这个乌龟就是观察者，他观察菩萨洒水这个动作。")]),s._v(" "),a("p",[a("strong",[s._v("优点：")]),s._v(" 1、观察者和被观察者是抽象耦合的。 2、建立一套触发机制。")]),s._v(" "),a("p",[a("strong",[s._v("缺点：")]),s._v(" 1、如果一个被观察者对象有很多的直接和间接的观察者的话，将所有的观察者都通知到会花费很多时间。 2、如果在观察者和观察目标之间有循环依赖的话，观察目标会触发它们之间进行循环调用，可能导致系统崩溃。 3、观察者模式没有相应的机制让观察者知道所观察的目标对象是怎么发生变化的，而仅仅只是知道观察目标发生了变化。")]),s._v(" "),a("p",[a("strong",[s._v("使用场景：")])]),s._v(" "),a("ul",[a("li",[s._v("一个抽象模型有两个方面，其中一个方面依赖于另一个方面。将这些方面封装在独立的对象中使它们可以各自独立地改变和复用。")]),s._v(" "),a("li",[s._v("一个对象的改变将导致其他一个或多个对象也发生改变，而不知道具体有多少对象将发生改变，可以降低对象之间的耦合度。")]),s._v(" "),a("li",[s._v("一个对象必须通知其他对象，而并不知道这些对象是谁。")]),s._v(" "),a("li",[s._v("需要在系统中创建一个触发链，A对象的行为将影响B对象，B对象的行为将影响C对象……，可以使用观察者模式创建一种链式触发机制。")])]),s._v(" "),a("p",[a("strong",[s._v("注意事项：")]),s._v(" 1、JAVA 中已经有了对观察者模式的支持类。 2、避免循环引用。 3、如果顺序执行，某一观察者错误会导致系统卡壳，一般采用异步方式。")])]),s._v(" "),a("h2",{attrs:{id:"_2-观察者模式详解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-观察者模式详解"}},[s._v("#")]),s._v(" 2 观察者模式详解")]),s._v(" "),a("h3",{attrs:{id:"_2-1-观察者模式结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-观察者模式结构"}},[s._v("#")]),s._v(" 2.1 观察者模式结构")]),s._v(" "),a("p",[s._v("观察者模式结构中通常包括观察目标和观察者两个继承层次结构，其结构图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/f24da870325ba3cdac402a25213fd7df.png",alt:"image-20220430160031478"}})]),s._v(" "),a("p",[s._v("由图可知，观察者模式包含以下4个角色。")]),s._v(" "),a("ol",[a("li",[s._v("Subject（目标）：目标又称为主题，它是指被观察的对象。在目标中定义了一个观察者集合，一个观察目标可以接受任意数量的观察者来观察，它提供了一系列方法来增加和删除观察者对象，同时它定义了通知方法notify()。目标类可以是接口，也可以是抽象类或具体类。")]),s._v(" "),a("li",[s._v("ConcreteSubject（具体目标）：具体目标是目标类的子类，它通常包含有经常发生改变的数据，当它的状态发生改变时它向各个观察者发出通知；同时它还实现了在目标类中定义的抽象业务逻辑方法。"),a("font",{attrs:{color:"puple"}},[s._v("如果无须扩展目标类，具体目标类可以省略。")])],1),s._v(" "),a("li",[s._v("Observer（观察者）：观察者将对观察目标的改变做出反映，观察者一般定义为接口，该接口声明了更新数据的方法update()，因此又称为抽象观察者。")]),s._v(" "),a("li",[s._v("ConcreteObserver（具体观察者）："),a("font",{attrs:{color:"red"}},[s._v("在具体观察者中维护一个指向具体目标对象的引用，它存储具体观察者的有关状态，这些状态需要和具体目标的状态保持一致；")]),s._v("它实现了在抽象观察者Observer中定义的update()方法。通常在实现时可以调用具体目标类的attach()方法将自己添加到目标类的集合中或者通过detach()方法将自己从目标类的集合中删除。")],1)]),s._v(" "),a("h3",{attrs:{id:"_2-2-观察者模式实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-观察者模式实现"}},[s._v("#")]),s._v(" 2.2 观察者模式实现")]),s._v(" "),a("p",[s._v("抽象目标类典型代码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token import"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("java"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("util"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")])]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Subject")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//定义一个观察者集合用于存储所有观察者对象")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("List")]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Observer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v(" observers "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ArrayList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//注册方法，用于向观察者集合中增加一个观察者")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("attach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Observer")]),s._v(" observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        observers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//注销方法，用于在观察者集合中删除一个观察者")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("detach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Observer")]),s._v(" observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        observers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("remove")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("observer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//声明抽象通知方法")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("abstract")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("notify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("具体目标类典型代码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConcreteSubject")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Subject")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//实现通知方法")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("notify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//遍历观察者集合，调用每一个观察者的响应方法")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Observer")]),s._v(" obs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("observers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            obs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("抽象观察者典型代码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Observer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//声明响应方法")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("具体观察者典型代码如下：")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConcreteObserver")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Observer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//实现响应方法")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//具体响应代码")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("有时候在"),a("font",{attrs:{color:"red"}},[s._v("具体观察者类ConcreteObserver中需要使用到具体目标类ConcreteSubject中的状态（属性），会存在关联或依赖关系。")])],1),s._v(" "),a("li",[s._v("如果在具体层之间具有关联关系，系统的扩展性将受到一定的影响，"),a("font",{attrs:{color:"red"}},[s._v("增加新的具体目标类有时候需要修改原有观察者的代码")]),s._v("，在一定程度上违背了开闭原则，但是如果原有观察者类无须关联新增的具体目标，则系统扩展性不受影响。")],1)]),s._v(" "),a("h3",{attrs:{id:"_2-3-观察者模式应用举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-观察者模式应用举例"}},[s._v("#")]),s._v(" 2.3 观察者模式应用举例")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("题目描述")])]),s._v(" "),a("blockquote",[a("p",[s._v("在某多人联机对战游戏中，多个玩家可以加入同一战队组成联盟，当战队中的某一成员受到敌人攻击时将给所有其他盟友发送通知，盟友收到通知后将做出响应。现使用观察者模式设计并实现该过程，以实现战队成员之间的联动。")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("题目分析")])]),s._v(" "),a("p",[s._v("战队成员之间的联动过程：联盟成员受到攻击——>发送通知给盟友——>盟友做出响应。\n"),a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/70b57d5d86854ded97a30929030f7ea8.png",alt:"在这里插入图片描述"}})])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("UML类图")]),s._v(" "),a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/bc370875124047e695fbffd1e232fca5-20231125212702939.png",alt:"在这里插入图片描述"}})]),s._v(" "),a("p",[s._v("其中，AllyControlCenter充当抽象目标类，ConcreteAllyControlCenter充当具体目标类，Observer充当抽象观察者，Player充当具体观察者。")])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("代码")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/unique-pure/designpattern_code/tree/main/src/observer_pattern",target:"_blank",rel:"noopener noreferrer"}},[s._v("代码地址"),a("OutboundLink")],1)])])]),s._v(" "),a("h2",{attrs:{id:"_3-观察者模式与mvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-观察者模式与mvc"}},[s._v("#")]),s._v(" 3 观察者模式与MVC")]),s._v(" "),a("p",[s._v("在当前流行的MVC（Model-View-Controller）架构中也应用了观察者模式，MVC是一种架构模式，它包含了3个角色，即模型(Model)，视图(View)和控制器(Controller)。其中，模型可对应于观察者模式中的观察目标，而视图对应于观察者，控制器可充当两者之间的中介者。当模型层的数据发生改变时，视图层将自动改变其显示内容。MVC的结构图如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/cf6f1e886d92e88a2d3e47e0efd2e12d.png",alt:"image-20220430171138766"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);