(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{488:function(t,a,s){"use strict";s.r(a);var _=s(0),i=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_1-引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-引言"}},[t._v("#")]),t._v(" 1 引言")]),t._v(" "),a("p",[t._v("在硬盘驱动器占据主导地位数十年后，一种新型的持久存储设备最近在世界上占据了重要地位。这种设备一般被称为"),a("strong",[t._v("固态存储设备")]),t._v("，它不像硬盘驱动器那样有机械或移动部件，而是由晶体管构成，就像内存和处理器一样。然而，与典型的随机存取存储器（如 DRAM）不同，这种固态存储设备（又称 SSD）在断电的情况下仍能保留信息，因此是持久存储数据的理想选择。")]),t._v(" "),a("p",[t._v("我们将重点讨论的技术是"),a("strong",[t._v("闪存")]),t._v("（更具体地说，是基于 NAND 的闪存，它具有更好的成本效益，即每存储容量单位的成本较低。这使得 NAND 型闪存在大容量存储设备中得到广泛应用，如固态硬盘（SSD）和闪存卡等），它是由 Fujio Masuoka 在 20 世纪 80 年代发明的，。我们将看到，闪存具有一些独特的特性。")]),t._v(" "),a("ul",[a("li",[t._v("例如，要写入闪存的某一大块（即一个"),a("strong",[t._v("闪存页")]),t._v("），首先必须擦除更大的一块（即一个"),a("strong",[t._v("闪存块")]),t._v("），而擦除的代价可能相当昂贵。")]),t._v(" "),a("li",[t._v("此外，过于频繁地写入页面会导致页面磨损。")])]),t._v(" "),a("p",[t._v("这两个特性使得构建基于闪存的固态硬盘成为一项有趣的挑战：")]),t._v(" "),a("blockquote",[a("p",[t._v("如何构建基于闪存的固态硬盘 如何构建基于闪存的固态硬盘？如何处理擦除的昂贵特性？考虑到反复擦写会损耗设备，我们如何才能制造出使用寿命长的设备？技术进步的脚步会停止吗？或者不再令人惊叹？")])]),t._v(" "),a("p",[t._v("闪存芯片设计用于在单个晶体管中存储一个或多个bit；晶体管内捕获的电荷水平被映射为二进制值。在单层单元 (SLC) 闪存中，晶体管内仅存储单个位（即 1 或 0）；对于多层单元 (MLC) 闪存，两个位被编码为不同的电荷级别，例如，00、01、10 和 11 分别由低、稍低、稍高和高电平表示。甚至还有三层单元 (TLC) 闪存以及四层单元(QLC)闪存，每个单元编码 3 位、4位。如下图所示。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/From_Bits_To_Banks_Example.png",alt:"image-20240420214539405"}})]),t._v(" "),a("p",[t._v("总体而言，SLC芯片性能更高，但价格也更高。")]),t._v(" "),a("h2",{attrs:{id:"_2-从bit到组-平面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-从bit到组-平面"}},[t._v("#")]),t._v(" 2 从bit到组/平面")]),t._v(" "),a("p",[t._v("正如古希腊人所说，存储一个bit（或几个bit）并不能构成一个存储系统。因此，闪存芯片被组织成由大量单元组成的组或平面。")]),t._v(" "),a("p",[t._v("一个组以两种不同大小的单位进行访问：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("块")]),t._v("（有时称为"),a("strong",[t._v("擦除块")]),t._v("），通常大小为 128 KB 或 256 KB；")]),t._v(" "),a("li",[a("strong",[t._v("页")]),t._v("，大小为几 KB（如 4KB）。")])]),t._v(" "),a("p",[t._v("每个存储组内有大量的块，每个块内又有大量的页。在考虑闪存时，你必须记住这个新术语，它不同于我们在磁盘和 RAID 中提到的块，也不同于我们在虚拟内存中提到的页。")]),t._v(" "),a("p",[t._v("下图显示了一个闪存平面的块和页的示例；在这个简单的示例中，有三个块，每个块包含四个页。我们将在下文中了解区分块和页的原因；事实证明，这种区分对于闪存操作（如读写）至关重要，对于设备的整体性能更是如此。你将了解到的最重要（也是最奇怪）的事情是，"),a("font",{attrs:{color:"red"}},[t._v("要写入块中的页面，首先必须擦除整个块")]),t._v("；这一棘手的细节使得构建基于闪存的固态硬盘成为一项有趣且值得挑战的任务，也是本章后半部分的主题。")],1),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/A_Simple_Flash_Chip_Pages_Within_Blocks",alt:"image-20240420214355415"}})]),t._v(" "),a("h2",{attrs:{id:"_3-基本闪存操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-基本闪存操作"}},[t._v("#")]),t._v(" 3 基本闪存操作")]),t._v(" "),a("h3",{attrs:{id:"_3-1-读取、擦除和编程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-读取、擦除和编程"}},[t._v("#")]),t._v(" 3.1 读取、擦除和编程")]),t._v(" "),a("p",[t._v("鉴于这种闪存组织结构，闪存芯片可支持三种低级操作。"),a("font",{attrs:{color:"red"}},[t._v("读取命令用于从闪存中读取一个页面；擦除和编程同时用于写入。")]),t._v("详情如下：")],1),t._v(" "),a("ul",[a("li",[a("strong",[t._v("读取（一页）")]),t._v("：闪存芯片的客户端只需向设备指定读取命令和相应的页码，即可读取任何页面（如 2KB 或 4KB）。这种操作通常相当快，10 微秒左右，与设备上的位置无关，（或多或少）也与上一次请求的位置无关（与磁盘完全不同），能够均匀快速地访问任何位置意味着该设备是随机存取设备。")]),t._v(" "),a("li",[a("strong",[t._v("擦除（一个块）")]),t._v("：在写入闪存中的页面之前，设备的特性要求首先擦除页面所在的整个块。重要的是，擦除会破坏块中的内容（通过将每个位设置为 1）；因此，在执行擦除之前，必须确保块中任何您需要的数据都已复制到其他地方（内存或其他闪存块）。擦除命令耗时较长，需要几毫秒才能完成。完成后，整个块将被重置，每一页都可以进行编程。")]),t._v(" "),a("li",[a("strong",[t._v("编程（一页）")]),t._v("：擦除块后，可使用编程命令将页面中的部分 1 变为 0，并将页面中的所需内容写入闪存。对页面进行编程的成本比擦除块低，但比读取页面的成本高，在现代闪存芯片上通常需要 100 微秒左右。")])]),t._v(" "),a("p",[t._v("对闪存芯片的一种理解是，每个页面都有一个与之相关的状态。"),a("font",{attrs:{color:"red"}},[t._v("页面开始时处于"),a("code",[t._v("INVALID")]),t._v("状态。通过擦除页面所在的块，可以将页面（以及该块中的所有页面）的状态设置为"),a("code",[t._v("ERASED")]),t._v("状态")]),t._v("，从而重置块中每个页面的内容，而且（重要的是）还可以对它们进行编程。当你对一个页面进行编程时，它的状态将变为 "),a("code",[t._v("VALID")]),t._v("，这意味着它的内容已被设置并可被读取。读取不会影响这些状态（尽管你只能读取已编程的页面）。一旦页面被编程，更改其内容的唯一方法就是擦除页面所在的整个块。下面是一个 4页块中各种擦除和编程操作后状态转换的示例：")],1),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/Base_Flash_Operations_Example.png",alt:"image-20240420221943937"}})]),t._v(" "),a("h3",{attrs:{id:"_3-2-详细示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-详细示例"}},[t._v("#")]),t._v(" 3.2 详细示例")]),t._v(" "),a("p",[t._v("由于写入过程（即擦除和编程）非常不寻常，让我们通过一个详细的示例来确保其合理性。在这个例子中，假设我们在一个 4 页的块中有以下 4 个 8 位页面（尺寸都很小，但在本例中很有用）；每个页面都是"),a("code",[t._v("VALID")]),t._v("，因为每个页面之前都被编程过。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/Basic_Flash_Operation_Example_1.png",alt:"image-20240420222159745"}})]),t._v(" "),a("p",[t._v("现在假设我们希望写入第 0 页，并用新内容填充它。要写入任何页，我们必须首先擦除整个块。假设我们这样做了，从而使块处于这种状态：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/Basic_Flash_Operation_Erase.png",alt:"image-20240420222254944"}})]),t._v(" "),a("p",[t._v("现在，我们可以继续对页面0进行编程，例如，用内容 "),a("code",[t._v("00000011")]),t._v(" 来覆盖旧的第 0 页（内容 "),a("code",[t._v("00011000")]),t._v("）。这样，我们的程序块看起来就像这样了：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/Basic_Flash_Operation_Program.png",alt:"image-20240420222359099"}})]),t._v(" "),a("p",[t._v("现在坏消息来了：第 1、2 和 3 页的内容已经全部丢失！因此，在覆盖块内的任何页面之前，我们必须先将我们关心的任何数据移动到其他位置（如内存或闪存上的其他位置）。擦除的性质将对我们如何设计基于闪存的固态硬盘产生重大影响，我们很快就会了解到这一点。")]),t._v(" "),a("h3",{attrs:{id:"_3-3-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-总结"}},[t._v("#")]),t._v(" 3.3 总结")]),t._v(" "),a("p",[t._v("读取页面很简单：只需读取页面即可。闪存芯片在这方面做得很好，而且速度很快；就性能而言，它们有可能大大超过现代磁盘驱动器的随机读取性能，而现代磁盘驱动器由于机械寻道和旋转成本而速度较慢。")]),t._v(" "),a("p",[t._v("写入页面则比较麻烦；首先必须擦除整个块（注意先将我们关心的任何数据转移到另一个位置），然后对所需页面进行编程。这不仅成本高昂，而且频繁重复这种编程/擦除循环会导致闪存芯片最大的可靠性问题："),a("strong",[t._v("磨损")]),t._v("。"),a("font",{attrs:{color:"red"}},[t._v("在设计使用闪存的存储系统时，写入的性能和可靠性是重点")]),t._v("。我们很快就会了解到现代固态硬盘是如何解决这些问题的，尽管存在这些限制，但仍能提供出色的性能和可靠性。")],1),t._v(" "),a("h2",{attrs:{id:"_4-闪存性能和可靠性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-闪存性能和可靠性"}},[t._v("#")]),t._v(" 4 闪存性能和可靠性")]),t._v(" "),a("p",[t._v("因为我们有兴趣用原始闪存芯片构建存储设备，所以有必要了解它们的基本性能特征。下图粗略总结了 SLC、MLC 和 TLC 闪存（每个单元分别存储 1、2 和 3 位信息）的读取、编程和擦除的基本操作延迟。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/Raw_Flash_Performance_Characteristics.png",alt:"image-20240420223008434"}})]),t._v(" "),a("p",[t._v("从表中可以看出，读取延迟非常好，只需 10 微秒即可完成。编程延迟更高且变化更大，SLC 低至 200 微秒，但当每个单元中装入更多位时，程序延迟会更高；为了获得良好的写入性能，您必须并行使用多个闪存芯片。最后，擦除非常昂贵，通常需要几毫秒。处理这种成本是现代闪存设计的核心。")]),t._v(" "),a("p",[t._v("现在让我们考虑一下闪存芯片的可靠性。与机械磁盘不同，机械磁盘可能会因多种原因而发生故障（包括可怕的物理磁头碰撞，即驱动器磁头实际上与记录表面接触），闪存芯片是纯硅，从这个意义上讲，需要担心的可靠性问题较少，主要担心的是"),a("strong",[t._v("磨损")]),t._v("："),a("font",{attrs:{coor:"red"}},[t._v("当闪存块被擦除和编程时，它会慢慢产生一点额外的电荷。随着时间的推移，随着额外电荷的积累，区分 0 和 1 变得越来越困难。当变得不可能时，该块就变得无法使用。")])],1),t._v(" "),a("p",[t._v("目前，块的典型寿命尚不清楚。制造商将基于 MLC 的模块评价为具有 10,000 次 P/E（编程/擦除）循环寿命；也就是说，每个块在失败之前可以被擦除和编程 10,000 次。基于 SLC 的芯片由于每个晶体管仅存储一位，因此具有较长的使用寿命，通常为 100,000 个 P/E 周期。然而，最近的研究表明，寿命比预期的要长得多。")]),t._v(" "),a("p",[t._v("闪存芯片内的另一个可靠性问题被称为"),a("strong",[t._v("干扰")]),t._v("。当访问闪存中的特定页面时，相邻页面中的某些位可能会被翻转；这种位翻转被称为"),a("strong",[t._v("读取干扰或编程干扰")]),t._v("，具体取决于页面是被读取还是被编程。")]),t._v(" "),a("blockquote",[a("center",[t._v("向后兼容性的重要性\n")]),t._v(" "),a("p",[t._v("向后兼容性始终是分层系统中需要考虑的问题。通过定义两个系统之间的稳定接口，可以在接口的每一侧实现创新，同时确保持续的互操作性。这种方法在许多领域都非常成功：操作系统为应用程序提供相对稳定的 API，磁盘为文件系统提供相同的基于块的接口，IP 网络堆栈中的每一层都为上一层提供固定不变的接口。")]),t._v(" "),a("p",[t._v("毫不奇怪，这种刚性可能有一个缺点，因为在一代中定义的接口可能不适用于下一代。在某些情况下，考虑完全重新设计整个系统可能会很有用。 Sun ZFS 文件系统 就是一个很好的例子；通过重新考虑文件系统和 RAID 的交互，ZFS 的创建者设想（然后实现）了一个更有效的集成整体。")])],1),t._v(" "),a("h2",{attrs:{id:"_5-从原始闪存到基于闪存的-ssd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-从原始闪存到基于闪存的-ssd"}},[t._v("#")]),t._v(" 5 从原始闪存到基于闪存的 SSD")]),t._v(" "),a("p",[t._v("鉴于我们对闪存芯片的基本了解，我们现在面临下一个任务：如何将一组基本的闪存芯片变成看起来像典型存储设备的东西。标准存储接口是一种简单的基于块的接口，在给定块地址的情况下，可以读取或写入大小为 512 字节（或更大）的"),a("strong",[t._v("块（扇区）")]),t._v("。"),a("font",{attrs:{color:"red"}},[t._v("基于闪存的 SSD 的任务是在其内部的原始闪存芯片之上提供标准块接口")]),t._v("。")],1),t._v(" "),a("p",[a("font",{attrs:{color:"red"}},[t._v("在内部，SSD 由一定数量的闪存芯片（用于持久存储）组成。 SSD 还包含一定量的易失性（即非持久性）内存（例如 SRAM）")]),t._v("，这样的内存对于数据的缓存和缓冲以及映射表很有用，我们将在下面了解。最后，SSD 包含协调设备操作的控制逻辑。简化框图如下图所示。")],1),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/A_Flash_Based_SSD_Logical.png",alt:"image-20240420224040136"}})]),t._v(" "),a("p",[t._v("该控制逻辑的基本功能之一是满足客户端的读写，根据需要将其转化为内部闪存操作。**闪存转换层（FTL）**正是提供了这种功能。 "),a("font",{attrs:{color:"red"}},[t._v("FTL 接受逻辑块（构成设备接口）上的读写请求，并将其转换为底层物理块和物理页（构成实际闪存设备）上的低级读取、擦除和编程命令。")]),t._v(" FTL 应该以提供卓越的性能和高可靠性为目标来完成这项任务。")],1),t._v(" "),a("p",[t._v("正如我们将看到的，卓越的性能可以通过技术的组合来实现。一个关键是"),a("strong",[t._v("并行")]),t._v("利用多个闪存芯片；虽然我们不会进一步讨论这项技术，但可以说所有现代 SSD 都在内部使用多个芯片来获得更高的性能。另一个性能目标是"),a("strong",[t._v("减少写入放大")]),t._v("，写入放大定义为 FTL 向闪存芯片发出的总写入流量（以字节为单位）除以客户端向 SSD 发出的总写入流量（以字节为单位）。正如我们将在下面看到的，简单的 FTL 构建方法将导致高写入放大和低性能。高可靠性将通过几种不同方法的组合来实现。如上所述，一个主要问题是磨损。如果单个块被频繁地擦除和编程，它将变得不可用；因此，FTL 应尝试尽可能均匀地跨闪存块分布写入，确保设备的所有块大致同时磨损；这样做称为"),a("strong",[t._v("磨损均衡")]),t._v("，是任何现代 FTL 的重要组成部分。")]),t._v(" "),a("p",[t._v("另一个可靠性问题是编程干扰。为了最大限度地减少这种干扰，FTL 通常会按从低页到高页的顺序对擦除块内的页进行编程。这种顺序编程方法最大限度地减少了干扰并被广泛使用。")]),t._v(" "),a("h2",{attrs:{id:"_6-ftl-组织结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-ftl-组织结构"}},[t._v("#")]),t._v(" 6 FTL 组织结构")]),t._v(" "),a("h3",{attrs:{id:"_6-1-直接映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-直接映射"}},[t._v("#")]),t._v(" 6.1 直接映射")]),t._v(" "),a("p",[t._v("最简单的 FTL 组织结构我们称之为"),a("strong",[t._v("直接映射")]),t._v("。在这种方法中，逻辑页 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("N")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6833em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v(" 的读取直接映射到物理页 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("N")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6833em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v(" 的读取。对逻辑页 N 的写入则更为复杂；FTL 首先要读入页面 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("N")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6833em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v(" 所在的整个块，然后擦除该块，最后对旧页面和新页面进行编程。")]),t._v(" "),a("p",[t._v("你可能已经猜到，直接映射 FTL 在性能和可靠性方面都存在很多问题。性能问题出现在每次写入时：设备必须读入整个数据块（成本高昂），擦除（成本相当高昂），然后编程（成本高昂）。最终结果是严重的写入放大（与块中的页数成正比），因此写入性能很差，甚至比典型硬盘的机械寻道和旋转延迟还要慢。")]),t._v(" "),a("p",[t._v("更糟糕的是这种方法的可靠性。如果文件系统元数据或用户文件数据被反复覆盖，同一数据块就会被一次又一次地擦除和编程，使其迅速损耗，并可能丢失数据。直接映射方法只是将磨损的控制权过多地交给了客户端工作负载；如果工作负载不能将写入负载均匀地分散到逻辑块中，那么包含常用数据的底层物理块就会很快磨损。出于可靠性和性能方面的考虑，直接映射 FTL 都不是一个好主意。")]),t._v(" "),a("h3",{attrs:{id:"_6-2-日志结构的-ftl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-日志结构的-ftl"}},[t._v("#")]),t._v(" 6.2 日志结构的 FTL")]),t._v(" "),a("h4",{attrs:{id:"_6-2-1-基本原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-1-基本原理"}},[t._v("#")]),t._v(" 6.2.1 基本原理")]),t._v(" "),a("p",[t._v("由于这些原因，如今大多数 FTL 都是"),a("strong",[t._v("日志结构")]),t._v("的，这一理念在存储设备（如我们现在看到的）和其上的文件系统（如我们将在"),a("strong",[t._v("日志结构文件系统")]),t._v("一章中看到的）中都很有用。在写入逻辑块 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("N")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6833em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v(" 时，设备会将写入内容附加到当前正在写入的块中的下一个空闲位置；我们称这种写入方式为"),a("strong",[t._v("日志")]),t._v("。为方便后续读取块 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mi",[t._v("N")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.6833em"}}),a("span",{staticClass:"mord mathnormal",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])]),t._v("，设备会保存一个"),a("strong",[t._v("映射表")]),t._v("（在内存中，并以某种形式持久存在于设备上）；该表存储了系统中每个逻辑块的物理地址。")]),t._v(" "),a("p",[t._v("让我们举例说明基于日志的基本方法是如何工作的。对于客户端来说，设备看起来就像一个典型的磁盘，可以读写 512 字节的扇区（或扇区组）。为简单起见，假设客户端正在读取或写入 4KB 大小的块。让我们进一步假设SSD包含大量 16KB 大小的块，每个块分为 4 个 4KB 页面（但闪存块通常由更多页面组成）。")]),t._v(" "),a("p",[t._v("假设客户端发出以下操作序列：")]),t._v(" "),a("ul",[a("li",[t._v("Write(100) with contents "),a("code",[t._v("a1")])]),t._v(" "),a("li",[t._v("Write(101) with contents "),a("code",[t._v("a2")])]),t._v(" "),a("li",[t._v("Write(2000) with contents "),a("code",[t._v("b1")])]),t._v(" "),a("li",[t._v("Write(2001) with contents "),a("code",[t._v("b2")])])]),t._v(" "),a("p",[t._v("SSD 客户端（如文件系统）使用这些"),a("strong",[t._v("逻辑块地址")]),t._v("（如 100）来记忆信息的位置。")]),t._v(" "),a("p",[t._v("在内部，设备必须将这些块写入转化为原始硬件支持的擦除和编程操作，并以某种方式记录每个逻辑块地址在固态硬盘的哪个物理页面存储数据。假设固态硬盘的所有块目前都无效，因此必须先擦除这些块，然后才能对任何页面进行编程。这里显示的是固态硬盘的初始状态，所有页面都标记为"),a("code",[t._v("INVALID(i)")]),t._v("：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/SSD_Initial_State_Example.png",alt:"image-20240420225506248"}})]),t._v(" "),a("p",[t._v("当SSD收到第一个写入（逻辑块100）时，FTL决定将其写入物理块0，其中包含四个物理页：0、1、2和3。因为该块没有被擦除，所以我们还不能写入；设备必须首先向块 0 发出擦除命令。这样做会导致以下状态：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/SSD_Erase_State_Example_1.png",alt:"image-20240420225602726"}})]),t._v(" "),a("p",[t._v("现在可以对 0 块进行编程了。大多数固态硬盘会按顺序（即从低到高）写入页面，从而减少与"),a("strong",[t._v("程序干扰")]),t._v("有关的可靠性问题。然后，固态硬盘将逻辑块 100 写入物理页 0：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/SSD_Program_State_Example_1.png",alt:"image-20240420225654860"}})]),t._v(" "),a("p",[t._v("但如果客户要读取逻辑块 100 呢？如何找到它的位置？SSD必须将对逻辑块 100 的读取转换为对物理页 0 的读取。为了适应这种功能，当 FTL 将逻辑块 100 写入物理页 0 时，它会在"),a("strong",[t._v("内存映射表")]),t._v("中记录这一事实。我们还将在图表中跟踪该映射表的状态：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/SSD_Program_State_Trace_Example.png",alt:"image-20240420225849479"}})]),t._v(" "),a("p",[t._v("现在您可以看到当客户端写入 SSD 时会发生什么。 SSD找到写入位置，通常只是选择下一个空闲页面；然后，它使用块的内容对该页进行编程，并将逻辑到物理的映射记录在其映射表中。后续读取只需使用该表将客户端提供的逻辑块地址"),a("strong",[t._v("转换")]),t._v("为读取数据所需的物理页号。")]),t._v(" "),a("p",[t._v("现在让我们检查示例写入流中的其余写入：101、2000 和 2001。写入这些块后，设备的状态为：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/SSD_Program_State_Trace_Example_2.png",alt:"image-20240420230124321"}})]),t._v(" "),a("p",[t._v("基于日志的方法从本质上提高了性能（只需偶尔擦除一次，完全避免了直接映射方法中代价高昂的读取-修改-写入），并大大提高了可靠性。FTL 现在可以在所有页面上分散写入，执行所谓的"),a("strong",[t._v("磨损均衡")]),t._v("，延长设备的使用寿命；我们将在下文进一步讨论损耗均衡。")]),t._v(" "),a("blockquote",[a("center",[t._v("FTL 映射信息持久性\n")]),t._v(" "),a("p",[t._v("您可能想知道：如果设备断电会发生什么？内存映射表消失了吗？显然，此类信息不会真正丢失，否则该设备将无法充当持久存储设备。 SSD 必须具有某种恢复映射信息的方法。")]),t._v(" "),a("p",[t._v("最简单的做法是在每个页面上记录一些映射信息，即所谓的"),a("strong",[t._v("带外 (OOB) 区域")]),t._v("。当设备断电并重新启动时，它必须通过扫描 OOB 区域并重建内存中的映射表。这种基本方法也有其问题；扫描大型 SSD 来查找所有必要的映射信息的速度很慢。为了克服这个限制，一些高端设备使用更复杂的日志记录和检查点技术来加速恢复。")])],1),t._v(" "),a("p",[t._v("不幸的是，这种基本的日志结构方法有一些缺点。")]),t._v(" "),a("ul",[a("li",[t._v("第一个是逻辑块的覆盖会导致我们称之为"),a("strong",[t._v("垃圾")]),t._v("的东西，即驱动器周围的旧版本数据并占用空间。设备必须定期执行**垃圾回收（GC）**以找到所述块和可用空间以供将来写入；过多的垃圾回收会增加写入放大并降低性能。")]),t._v(" "),a("li",[t._v("二是内存映射表成本高；设备越大，此类表需要的内存就越多。我们现在依次讨论每一个。")])]),t._v(" "),a("h4",{attrs:{id:"_6-2-2-垃圾回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-2-垃圾回收"}},[t._v("#")]),t._v(" 6.2.2 垃圾回收")]),t._v(" "),a("p",[t._v("任何日志结构方法（例如此方法）的第一个成本是创建垃圾，因此必须执行垃圾回收（即死块回收）。让我们用之前例子来理解这一点。回想一下，逻辑块 100、101、2000 和 2001 已写入设备。")]),t._v(" "),a("p",[t._v("现在，我们假设再次写入块 100 和 101，内容为 "),a("code",[t._v("c1")]),t._v(" 和 "),a("code",[t._v("c2")]),t._v("。写入操作将写入下一个空闲页（在本例中为物理页 4 和 5），并且映射表也会相应更新。请注意，设备必须首先擦除块 1 才能进行此类编程：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/SSD_Erase_And_Program_Example.png",alt:"image-20240421130023025"}})]),t._v(" "),a("p",[t._v("我们现在遇到的问题应该很明显：物理页 0 和 1 虽然标记为 "),a("code",[t._v("VALID")]),t._v("，但其中有垃圾，即旧版本的块 100 和 101。由于设备的日志结构特性，覆盖会产生垃圾块，设备必须回收这些垃圾块，以便为新的写入提供可用空间。")]),t._v(" "),a("p",[t._v("查找垃圾块（也称为死块）并将其回收以备将来使用的过程称为"),a("strong",[t._v("垃圾回收")]),t._v("，它是所有现代固态硬盘的重要组成部分。基本过程很简单：找到包含一个或多个垃圾页的块，读入该块中的活（非垃圾）页，将这些活页写入日志，最后回收整个块用于写入。")]),t._v(" "),a("p",[t._v("下面我们举例说明。设备决定要回收上述 0 号块中的所有死页。块 0 有两个死块（第 0 页和第 1 页）和两个活块（第 2 页和第 3 页，分别包含块 2000 和 2001）。为此，设备将：")]),t._v(" "),a("ul",[a("li",[t._v("从块 0 读取有效数据（第 2 页和第 3 页）")]),t._v(" "),a("li",[t._v("将有效数据写入日志末尾")]),t._v(" "),a("li",[t._v("擦除块 0（将其释放供以后使用）")])]),t._v(" "),a("p",[t._v("为了让垃圾回收程序发挥作用，每个块内必须有足够的信息，以便固态硬盘确定每个页面是有效还是无效。实现这一目的的一种自然方法是在每个块内的某个位置存储有关每个页面内存储了哪些逻辑块的信息。然后，设备就可以使用映射表来确定块中的每个页面是否保存有效数据。")]),t._v(" "),a("p",[t._v("在我们上面的示例中（垃圾回收之前），块 0 包含逻辑块 100、101、2000 和 2001。通过检查映射表（在垃圾收集之前，映射表包含 "),a("code",[t._v("100->4")]),t._v("、"),a("code",[t._v("101->5")]),t._v("、"),a("code",[t._v("2000->2")]),t._v("、"),a("code",[t._v("2001->3")]),t._v("），设备可以轻松确定固态硬盘块内的每个页面是否包含有效信息。例如，2000 和 2001 显然仍由映射指向；而 100 和 101 则不是，因此是垃圾回收的候选对象。在我们的示例中，当垃圾回收过程完成后，设备的状态为：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/SSD_After_Garbage_Collection.png",alt:"image-20240421132028102"}})]),t._v(" "),a("p",[t._v("可以看出，垃圾回收的成本很高，需要读取和重写有效数据。最理想的回收对象是只包含死页的块；在这种情况下，数据块可以立即被擦除并用于新数据，而无需进行昂贵的数据迁移。")]),t._v(" "),a("p",[t._v("为了降低 GC 成本，一些固态硬盘对设备进行了超额配置；通过增加额外的闪存容量，可以延迟清理并将其推至后台，或许可以在设备不太忙的时候进行。增加容量还能增加内部带宽，可用于清理，从而不影响客户端的感知带宽。许多现代硬盘都以这种方式进行超额配置，这是实现出色整体性能的关键之一。")]),t._v(" "),a("blockquote",[a("center",[t._v("一种称为 TRIM 的新存储 API\n")]),t._v(" "),a("p",[t._v("当我们想到硬盘驱动器时，我们通常只想到最基本的读写接口：读和写（通常还有某种"),a("strong",[t._v("缓存刷新")]),t._v("命令，确保写入实际上已被持久化，但为了简单起见，有时我们会忽略这一点）。对于日志结构的 SSD，以及任何保持逻辑到物理块的灵活且不断变化的映射的设备，一个新的接口非常有用，称为"),a("strong",[t._v("修剪")]),t._v("操作。")]),t._v(" "),a("p",[t._v("修剪操作采用一个地址（可能还有一个长度），并简单地通知设备该地址（和长度）指定的块已被删除；因此，设备不再需要跟踪有关给定地址范围的任何信息。"),a("font",{attrs:{color:"red"}},[t._v("对于标准硬盘驱动器，修剪并不是特别有用，因为驱动器具有块地址到特定盘片、磁道和扇区的静态映射。")])],1),t._v(" "),a("p",[t._v("然而，对于日志结构的 SSD，知道不再需要某个块非常有用，因为 SSD 可以从 FTL 中删除此信息，并在垃圾回收期间回收物理空间。")]),t._v(" "),a("p",[t._v("尽管我们有时将接口和实现视为独立的实体，但在这种情况下，我们看到实现塑造了接口。通过复杂的映射，了解不再需要哪些块可以更有效的实现。")])],1),t._v(" "),a("h4",{attrs:{id:"_6-2-3-映射表大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-3-映射表大小"}},[t._v("#")]),t._v(" 6.2.3 映射表大小")]),t._v(" "),a("p",[t._v("日志结构的第二个成本是可能会产生非常大的映射表，设备的每个 4 KB 页都有一个条目。例如，对于大型 1 TB SSD，每 4 KB 页一个 4 字节条目会导致设备需要 1 GB 内存，仅用于这些映射！因此，这种页级 FTL 方案是不切实际的。")]),t._v(" "),a("h5",{attrs:{id:"_6-2-3-1-基于块的映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-3-1-基于块的映射"}},[t._v("#")]),t._v(" 6.2.3.1 基于块的映射")]),t._v(" "),a("p",[t._v("降低映射成本的一种方法是只为设备的每个块而不是每个页保留一个指针，从而将映射信息量减少 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mfrac",[a("mrow",[a("mi",[t._v("S")]),a("mi",[t._v("i")]),a("mi",[t._v("z")]),a("msub",[a("mi",[t._v("e")]),a("mrow",[a("mi",[t._v("b")]),a("mi",[t._v("l")]),a("mi",[t._v("o")]),a("mi",[t._v("c")]),a("mi",[t._v("k")])],1)],1)],1),a("mrow",[a("mi",[t._v("S")]),a("mi",[t._v("i")]),a("mi",[t._v("z")]),a("msub",[a("mi",[t._v("e")]),a("mrow",[a("mi",[t._v("p")]),a("mi",[t._v("a")]),a("mi",[t._v("g")]),a("mi",[t._v("e")])],1)],1)],1)],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\frac{Size_{block}}{ Size_{page}}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"1.4365em","vertical-align":"-0.5423em"}}),a("span",{staticClass:"mord"},[a("span",{staticClass:"mopen nulldelimiter"}),a("span",{staticClass:"mfrac"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.8942em"}},[a("span",{staticStyle:{top:"-2.655em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.1645em"}},[a("span",{staticStyle:{top:"-2.357em","margin-left":"0em","margin-right":"0.0714em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),a("span",{staticClass:"sizing reset-size3 size1 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("p")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("a")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("e")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.2819em"}},[a("span")])])])])])])])]),a("span",{staticStyle:{top:"-3.23em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"frac-line",staticStyle:{"border-bottom-width":"0.04em"}})]),a("span",{staticStyle:{top:"-3.4159em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"3em"}}),a("span",{staticClass:"sizing reset-size6 size3 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.05764em"}},[t._v("S")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("i")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.04398em"}},[t._v("z")]),a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("e")]),a("span",{staticClass:"msupsub"},[a("span",{staticClass:"vlist-t vlist-t2"},[a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.3448em"}},[a("span",{staticStyle:{top:"-2.3488em","margin-left":"0em","margin-right":"0.0714em"}},[a("span",{staticClass:"pstrut",staticStyle:{height:"2.5em"}}),a("span",{staticClass:"sizing reset-size3 size1 mtight"},[a("span",{staticClass:"mord mtight"},[a("span",{staticClass:"mord mathnormal mtight"},[t._v("b")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.01968em"}},[t._v("l")]),a("span",{staticClass:"mord mathnormal mtight"},[t._v("oc")]),a("span",{staticClass:"mord mathnormal mtight",staticStyle:{"margin-right":"0.03148em"}},[t._v("k")])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.1512em"}},[a("span")])])])])])])])])]),a("span",{staticClass:"vlist-s"},[t._v("​")])]),a("span",{staticClass:"vlist-r"},[a("span",{staticClass:"vlist",staticStyle:{height:"0.5423em"}},[a("span")])])])]),a("span",{staticClass:"mclose nulldelimiter"})])])])]),t._v(" 倍。"),a("font",{attrs:{color:"red"}},[t._v("这种"),a("strong",[t._v("块级 FTL")]),t._v(" 类似于在虚拟内存系统中具有更大的页面大小；在这种情况下，您可以为 VPN 使用更少的位，并在每个虚拟地址中使用更大的偏移量。")])],1),t._v(" "),a("p",[t._v("不幸的是，由于性能原因，在基于日志的 FTL 中使用基于块的映射效果不佳。当发生“小写入”（即小于物理块大小的写入）时，就会出现最大的问题。在这种情况下，FTL 必须从旧块中读取大量有效数据并将其复制到新块中（以及来自小写入的数据）。这种数据复制极大地增加了写放大，从而降低了性能。")]),t._v(" "),a("p",[t._v("为了更清楚地说明这个问题，我们来看一个例子。假设客户端之前写出了逻辑块 2000、2001、2002 和 2003（内容为 "),a("code",[t._v("a")]),t._v("、"),a("code",[t._v("b")]),t._v("、"),a("code",[t._v("c")]),t._v("、"),a("code",[t._v("d")]),t._v("），并且它们位于物理块 1 内的物理页 4、5、6 和 7。对于每页映射，转换表必须记录这些逻辑块的四个映射：2000→4、2001→5、2002→6、2003→7。")]),t._v(" "),a("p",[t._v("相反，如果我们使用块级映射，FTL 只需要记录所有这些数据的单个地址转换。然而，地址映射与我们之前的示例略有不同。具体来说，我们认为设备的逻辑地址空间被分割成闪存中物理块大小的块。因此，"),a("font",{attrs:{color:"red"}},[t._v("逻辑块地址由两部分组成：块号和偏移量")]),t._v("。因为我们假设每个物理块中有四个逻辑块，所以逻辑地址的偏移部分需要 2 位；其余（最高有效）位形成块号。")],1),t._v(" "),a("p",[t._v("逻辑块2000、2001、2002和2003都具有相同的块编号(500)，并且具有不同的偏移量(分别为0、1、2和3)。因此，通过块级映射，FTL 记录块 500 映射到块 1（从物理页 4 开始），如下图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/Based_On_Map_Example_1.png",alt:"image-20240421185518878"}})]),t._v(" "),a("p",[t._v("在基于块的 FTL 中，读取数据非常简单。首先，FTL 会从客户端提供的逻辑块地址中提取块号，方法是从地址的最高位取出。然后，FTL 在表中查找块号到物理页的映射。最后，FTL 将逻辑地址的偏移量与块的物理地址相加，计算出所需闪存页的地址。")]),t._v(" "),a("p",[t._v("例如，如果客户端发出对逻辑地址 2002 的读取，设备会提取逻辑块编号 (500)，在映射表中查找转换（查找 4），并将逻辑地址 (2) 的偏移量加到转换结果中 (4)，由此得到的物理页地址（6）就是数据所在的位置；然后，FTL 就可以向该物理地址发出读取指令，获取所需的数据（"),a("code",[t._v("c")]),t._v("）。")]),t._v(" "),a("p",[t._v("但如果客户向逻辑块 2002（内容为 "),a("code",[t._v("c'")]),t._v("）写入数据呢？在这种情况下，FTL 必须读入 2000、2001 和 2003，然后在新的位置写出所有四个逻辑块，并相应地更新映射表。如下图所示，逻辑块 1（数据原来所在的位置）可以被擦除并重新使用。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/Block_Based_Mapping_Write_Example.png",alt:"image-20240421190033073"}})]),t._v(" "),a("p",[t._v("从这个例子中可以看出，虽然块级映射大大减少了转换所需的内存量，但当写入的内容小于设备的物理块大小时，就会造成严重的性能问题；由于实际物理块可能是 256KB 或更大，这种写入可能会经常发生。因此，我们需要一个更好的解决方案。")]),t._v(" "),a("h5",{attrs:{id:"_6-2-3-2-混合映射"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-3-2-混合映射"}},[t._v("#")]),t._v(" 6.2.3.2 混合映射")]),t._v(" "),a("p",[t._v("为了实现灵活的写入并降低映射成本，许多现代 FTL 采用混合映射技术。通过这种方法，FTL 会保留一些已擦除的块并将所有写入定向到它们；这些称为"),a("strong",[t._v("日志块")]),t._v("。由于 FTL 希望能够将任何页写入日志块内的任何位置，而无需进行纯基于块的映射所需的所有复制，因此它会保留这些日志块的每页映射。")]),t._v(" "),a("p",[t._v("因此，FTL 在其内存中逻辑上有两种类型的映射表：我们称之为日志表的一小组每页映射，以及数据表中的一大组每块映射。当寻找特定的逻辑块时，FTL首先会查阅日志表；如果在那里找不到逻辑块的位置，FTL 将查阅数据表以找到其位置，然后访问所请求的数据。")]),t._v(" "),a("p",[t._v("混合映射策略的关键是保持较小的日志块数量。为了保持日志块的数量较少，FTL 必须定期检查日志块（每页都有一个指针）并将它们切换为只能由单个块指针指向的块。该切换是根据块的内容通过三种主要技术之一来完成的。")]),t._v(" "),a("p",[t._v("例如，假设 FTL 之前已写出逻辑页 1000、1001、1002 和 1003，并将它们放置在物理块 2 中（物理页 8、9、10、11）；假设写入1000、1001、1002和1003的内容分别为"),a("code",[t._v("a")]),t._v("、"),a("code",[t._v("b")]),t._v("、"),a("code",[t._v("c")]),t._v("和"),a("code",[t._v("d")]),t._v("。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/Hybird_Mapping_Example_1.png",alt:"image-20240421192827944"}})]),t._v(" "),a("p",[t._v("现在假设客户机以完全相同的顺序，在当前可用的日志块之一（例如物理块 0（物理页 0、1、2 和 3））中覆盖这些块（数据 "),a("code",[t._v("a'")]),t._v("、"),a("code",[t._v("b'")]),t._v("、"),a("code",[t._v("c'")]),t._v(" 和 "),a("code",[t._v("d'")]),t._v("）。在这种情况下，FTL 将处于以下状态：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/FTL_Hybird_Mapping_Write_Example.png",alt:"image-20240421192951355"}})]),t._v(" "),a("p",[t._v("因为这些块的写入方式与以前完全相同，所以 FTL 可以执行所谓的切换合并。在这种情况下，日志块（0）现在成为块0、1、2和3的存储位置，并由单个块指针指向；旧块 (2) 现在已被擦除并用作日志块。在这种最佳情况下，所需的所有每页指针都被单个块指针替换。")]),t._v(" "),a("p",[t._v("这种切换合并是混合FTL的最佳情况。遗憾的是，有时 FTL 并不那么幸运。试想一下，我们有相同的初始条件（逻辑块 1000 ... 1003 存储在物理块 2 中），但客户端覆盖了逻辑块 1000 和 1001。您认为在这种情况下会发生什么？为什么处理起来更具挑战性？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/FTL_Hybird_Mapping_Write_Partial_Example.png",alt:"image-20240421193357635"}})]),t._v(" "),a("p",[t._v("为了重新组合该物理块的其他页面，从而能够仅通过单个块指针引用它们，FTL 执行所谓的"),a("strong",[t._v("部分合并")]),t._v("。在此操作中，从物理块2读取逻辑块1002和1003，然后将其附加到日志中。 SSD的结果状态与上面的切换合并相同；然而，在这种情况下，FTL 必须执行额外的 I/O 才能实现其目标，从而增加了写放大。")]),t._v(" "),a("p",[t._v("FTL 遇到的最后一种情况称为"),a("strong",[t._v("完全合并")]),t._v("，需要更多的工作。在这种情况下，FTL 必须将许多其他块中的页面汇集在一起以执行清理。例如，假设逻辑块 0、4、8 和 12 写入日志块 A。要将此日志块切换为块映射页，FTL 必须首先创建包含逻辑块 0、1、2 的数据块、 和 3，因此 FTL 必须从其他地方读取 1、2 和 3，然后一起写出 0、1、2 和 3。接下来，合并必须对逻辑块 4 执行相同的操作，找到 5、6 和 7 并将它们协调为单个物理块。必须对逻辑块 8 和 12 执行相同的操作，然后（最后）可以释放日志块 A。毫不奇怪，频繁的完全合并会严重损害性能，因此应尽可能避免。")]),t._v(" "),a("h5",{attrs:{id:"_6-2-3-3-页面映射加缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-3-3-页面映射加缓存"}},[t._v("#")]),t._v(" 6.2.3.3 页面映射加缓存")]),t._v(" "),a("p",[t._v("鉴于上述混合方法的复杂性，其他人提出了更简单的方法来减少页面映射 FTL 的内存负载。最简单的方法可能是只在内存中缓存 FTL 的活动部分，从而减少所需的内存量。")]),t._v(" "),a("p",[t._v("这种方法效果不错。例如，如果给定的工作负载只访问一小部分页面，那么这些页面的转换就会存储在内存中的 FTL 中，这样性能就会非常出色，而不会产生高昂的内存成本。当然，这种方法也可能表现不佳。"),a("font",{attrs:{color:"red"}},[t._v("如果内存中无法包含必要的转换工作集，那么每次访问都需要额外读取闪存，以便在访问数据本身之前首先调入缺失的映射。")]),t._v("更糟糕的是，为了给新映射腾出空间，FTL 可能不得不剔除旧映射，如果该映射是脏映射（即尚未持续写入闪存），还将产生额外的写入。不过，在很多情况下，工作负载会显示出本地性，这种缓存方法既能减少内存开销，又能保持较高的性能。")],1),t._v(" "),a("h2",{attrs:{id:"_7-磨损均衡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-磨损均衡"}},[t._v("#")]),t._v(" 7 磨损均衡")]),t._v(" "),a("p",[t._v("最后，现代 FTL 必须实现的一项相关背景活动是"),a("strong",[t._v("磨损均衡")]),t._v("，如上所述。基本思想很简单：因为多个擦除/编程周期会磨损闪存块，所以 FTL 应尽力将工作均匀地分布到设备的所有块上。通过这种方式，所有块将大致在同一时间磨损，而不是一些“常用”块很快变得无法使用。")]),t._v(" "),a("p",[t._v("基本的日志结构方法在分散写入负载方面做得很好，垃圾回收也有帮助。然而，有时一个块会填充长期存在的数据，这些数据不会被覆盖；在这种情况下，垃圾回收永远不会回收该块，因此它不会收到其公平份额的写入负载。")]),t._v(" "),a("p",[t._v("为了解决这个问题，FTL 必须定期从这些块中读取所有有效数据，并将其重新写入其他地方，从而使该块可再次写入。这种磨损均衡过程会增加 SSD 的写入放大，从而降低性能，因为需要额外的 I/O 来确保所有块以大致相同的速率磨损。")]),t._v(" "),a("h2",{attrs:{id:"_8-ssd性能与成本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-ssd性能与成本"}},[t._v("#")]),t._v(" 8 SSD性能与成本")]),t._v(" "),a("h3",{attrs:{id:"_8-1-性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-性能"}},[t._v("#")]),t._v(" 8.1 性能")]),t._v(" "),a("p",[t._v("与硬盘驱动器不同，基于闪存的 SSD 没有机械组件，实际上在很多方面与 DRAM 更相似，因为它们是“随机访问”设备。与磁盘驱动器相比，最大的性能差异是在执行随机读取和写入时实现的；虽然典型的磁盘驱动器每秒只能执行几百次随机 I/O，但 SSD 可以做得更好。在这里，我们使用现代 SSD 的一些数据来看看 SSD 的性能到底有多好；我们特别感兴趣的是 FTL 如何很好地隐藏原始芯片的性能问题。")]),t._v(" "),a("p",[t._v("下表显示了三种不同 SSD 和一种顶级硬盘的一些性能数据。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/image-20240421194457078.png",alt:"image-20240421194457078"}})]),t._v(" "),a("p",[t._v("左边两列显示随机 I/O 性能，右边两列显示顺序I/O性能；前三行显示三种不同 SSD（来自Samsung、Seagate和Intel）的数据，最后一行显示硬盘驱动器（或 HDD）的性能，在本例中为Seagate高端驱动器。")]),t._v(" "),a("p",[t._v("我们可以从表中了解到一些有趣的事实。")]),t._v(" "),a("ul",[a("li",[t._v("首先，也是最引人注目的，是 SSD 和独立硬盘之间随机 I/O 性能的差异。虽然 SSD 在随机 I/O 中获得数十甚至数百 MB/秒，但这种“高性能”硬盘的峰值仅为几 MB/秒（事实上，我们四舍五入为 2 MB/秒） 。")]),t._v(" "),a("li",[t._v("其次，您可以看到，就顺序I/O性能而言，差异要小得多；虽然 SSD 的性能更好，但如果您只需要顺序I/O性能，硬盘驱动器仍然是一个不错的选择。第三，可以看到SSD随机读性能不如SSD随机写性能。随机写入性能如此出人意料的好，得益于很多SSD的日志结构设计，将随机写入转化为顺序写入，提高了性能。")]),t._v(" "),a("li",[t._v("最后，由于 SSD 在顺序 I/O 和随机 I/O 之间表现出一些性能差异，因此如何为硬盘驱动器构建文件系统的许多技术仍然适用于 SSD；尽管顺序 I/O 和随机 I/O 之间的差异幅度较小，但仍有足够的差距需要仔细考虑如何设计文件系统以减少随机 I/O。")])]),t._v(" "),a("h3",{attrs:{id:"_8-2-成本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-成本"}},[t._v("#")]),t._v(" 8.2 成本")]),t._v(" "),a("p",[t._v("正如我们在上面看到的，即使在执行顺序 I/O 时，SSD 的性能也大大超过了现代硬盘驱动器。那么，为什么 SSD 没有完全取代硬盘作为存储介质的选择呢？答案很简单："),a("strong",[t._v("成本")]),t._v("，或更具体地说，是"),a("strong",[t._v("每单位容量的成本")]),t._v("。目前，250 GB 驱动器的 SSD 成本约为 150 美元；这样的 SSD 每 GB 成本为 60 美分。传统的硬盘驱动器存储 1 TB 的成本约为 50 美元，这意味着每 GB 成本为 5 美分。这两种存储介质的成本仍然存在10倍以上的差异。")]),t._v(" "),a("p",[a("font",{attrs:{color:"red"}},[t._v("这些性能和成本差异决定了如何构建大规模存储系统。")]),t._v("如果性能是主要考虑因素，那么 SSD 是一个很好的选择，特别是在随机读取性能很重要的情况下。另一方面，如果您正在组装一个大型数据中心并希望存储大量信息，那么巨大的成本差异将促使您转向HDD。当然，混合方法是有意义的——一些存储系统同时配备了 SSD 和HDD，"),a("font",{attrs:{color:"red"}},[t._v("使用较少数量的 SSD 来存储更常用的“热”数据并提供高性能，同时存储其余的“冷”数据（较少使用）硬盘上的数据以节省成本。只要价格差距存在，硬盘就会一直存在。")])],1),t._v(" "),a("h2",{attrs:{id:"_9-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-总结"}},[t._v("#")]),t._v(" 9 总结")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("闪存芯片")]),t._v("由许多存储体组成，每个存储体都组织成"),a("strong",[t._v("擦除块")]),t._v("（有时简称为块）。每个块进一步细分为一定数量的"),a("strong",[t._v("页面")]),t._v("。")]),t._v(" "),a("li",[t._v("块很大（128KB–2MB）并包含许多页，而页相对较小（1KB–8KB）。")]),t._v(" "),a("li",[t._v("要从闪存读取，请发出"),a("strong",[t._v("带有地址和长度的读取命令")]),t._v("；这允许客户读取一页或多页。")]),t._v(" "),a("li",[t._v("写入闪存更为复杂。首先，客户端必须擦除整个块（这会删除块内的所有信息）。然后，客户端可以对每个页面精确地"),a("strong",[t._v("编程")]),t._v("一次，从而完成写入。")]),t._v(" "),a("li",[t._v("新的"),a("strong",[t._v("修剪")]),t._v("操作可用于告诉设备何时不再需要特定块（或块范围）。")]),t._v(" "),a("li",[t._v("闪存可靠性主要由"),a("strong",[t._v("磨损")]),t._v("决定；如果一个块被频繁地擦除和编程，它将变得不可用。")]),t._v(" "),a("li",[t._v("基于闪存的"),a("strong",[t._v("固态存储设备")]),t._v("（SSD）的行为就像普通的基于块的读/写磁盘一样。通过使用"),a("strong",[t._v("闪存转换层")]),t._v(" (FTL)，它将客户端的读取和写入转换为对底层闪存芯片的读取、擦除和编程。")]),t._v(" "),a("li",[t._v("大多数FTL 都是"),a("strong",[t._v("日志结构")]),t._v("的，这通过最小化擦除/编程周期来降低写入成本。内存中的转换层跟踪逻辑写入在物理介质中的位置。")]),t._v(" "),a("li",[t._v("日志结构FTL 的一个关键问题是垃圾回收的成本，这会导致写入放大。")]),t._v(" "),a("li",[t._v("另一个问题是映射表的大小，它可能会变得非常大。"),a("font",{attrs:{color:"red"}},[t._v("使用"),a("strong",[t._v("混合映射")]),t._v("或仅缓存 FTL 的热门部分是可能的补救措施。")])],1),t._v(" "),a("li",[t._v("最后一个问题是"),a("strong",[t._v("磨损均衡")]),t._v("。 FTL 必须偶尔从主要读取的块中迁移数据，以确保所述块也接收其擦除/编程负载份额。")])])])}),[],!1,null,null,null);a.default=i.exports}}]);