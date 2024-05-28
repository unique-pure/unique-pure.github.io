(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{499:function(r,_,a){"use strict";a.r(_);var v=a(0),e=Object(v.a)({},(function(){var r=this,_=r._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[_("h2",{attrs:{id:"_1-分布式存储系统难点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-分布式存储系统难点"}},[r._v("#")]),r._v(" 1 分布式存储系统难点")]),r._v(" "),_("p",[r._v("在设计大型分布式系统或存储系统时，初衷通常是为了获得显著的性能提升，通过数百台计算机的资源来并行完成大量工作。因此，性能问题成为最初的关注点。一个自然的想法是将数据分片（Sharding），分布到大量服务器上，从而并行读取数据。")]),r._v(" "),_("p",[r._v("当你在成百上千台服务器上进行分片时，服务器故障将成为常态。如果你有数千台服务器，每天甚至每小时都可能有服务器宕机。因此，需要自动化的方法来修复错误，而不是依赖人工介入。为此，自动容错系统至关重要，这引出了容错（fault tolerance）的概念。")]),r._v(" "),_("p",[r._v("实现容错最有效的方法之一是使用数据复制，只需维护2-3个数据副本，当其中一个故障时，可以使用另一个。因此，要实现容错，必须进行数据复制（replication）。")]),r._v(" "),_("p",[r._v("然而，数据复制带来了不一致性（inconsistency）问题。拥有多个数据副本，如果管理不当，副本之间可能不一致。理想情况下，可以任意使用任一副本进行容错，但如果副本不一致，应用程序将面临麻烦。因此，数据复制不可避免地会引发不一致性问题。")]),r._v(" "),_("p",[r._v("通过精巧的设计，可以减少甚至避免不一致性，使数据表现得符合预期。但要实现这一点，服务器之间需要进行额外的网络交互，这会降低性能。因此，如果追求一致性（consistency），必须付出性能的代价，这与最初的高性能目标相悖。")]),r._v(" "),_("p",[r._v("尽管可以构建高性能系统，但不可避免地会陷入性能与一致性的权衡之中。在实际应用中，为了获得良好的一致性，必须付出相应的代价。如果不愿付出代价，就需要忍受一定程度的不确定性。很多系统中都存在这种权衡，人们往往不愿为高一致性牺牲性能。")]),r._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/DS_Why_Hard.png",alt:"image-20240528101751499"}})]),r._v(" "),_("h2",{attrs:{id:"_2-错误的设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-错误的设计"}},[r._v("#")]),r._v(" 2 错误的设计")]),r._v(" "),_("p",[r._v("对于强一致性系统，应用程序或客户端感受到的就像在与一台服务器通信。尽管系统由数百台计算机组成，但理想的强一致模型让它看起来像只有一台服务器，一份数据，并且一次只处理一个请求。这种设计确保了每个请求能看到之前所有请求按顺序执行的结果。")]),r._v(" "),_("p",[r._v("对于存储服务器来说，它通常包含一块磁盘。执行写请求可能意味着向磁盘写入数据或对数据进行自增操作。如果是一次修改操作，并且我们有一个以 key-value 为索引的数据表单，那么我们会更新这个表单。如果是读取操作，只需从表单中取出之前写入的数据即可。为了保证这个简单服务的行为可预期，需要遵循一个规则：每次只执行一个请求。这样，每个请求都能看到之前所有请求按顺序执行后的结果。如果服务器按某种顺序依次处理写请求，当你读取数据时，你就能看到预期的数据。")]),r._v(" "),_("p",[r._v("举例来说，客户端 C1 发起写请求将 X 设置为 1，同时客户端 C2 发起写请求将 X 设置为 2。待 C1 和 C2 的写请求都执行完毕后，客户端 C3 发送读取 X 的请求，得到一个结果；客户端 C4 也发送读取 X 的请求，得到另一个结果。此时，问题是这两个客户端看到的结果会是什么。")]),r._v(" "),_("p",[r._v("即使在一个非常简单的系统中，仍会出现一些模糊场景，使你无法确定系统的执行过程及其输出结果。你只能根据结果判断系统是否保持了一致性。")]),r._v(" "),_("p",[r._v("如果 C3 读取 X 得到 2，那么 C4 也应该读取到 2，因为这表明写 X 为 2 的请求是第二个执行的写请求。当 C4 读取 X 时，写 X 为 2 应该仍然是第二个写请求。")]),r._v(" "),_("p",[r._v("然而，单服务器设计存在容错能力差的问题。如果服务器故障或磁盘损坏，系统将无法使用。因此，现实中我们会构建多副本的分布式系统，这引发了一系列新的问题。")]),r._v(" "),_("p",[r._v("假设我们有两台服务器，每台服务器都有数据的一份完整拷贝，并在磁盘上存储一个 key-value 表单。我们希望这两个表单完全一致，这样当一台服务器故障时，可以切换到另一台服务器继续读写操作。")]),r._v(" "),_("p",[r._v("两个表单完全一致意味着，"),_("font",{attrs:{color:"red"}},[r._v("每一个写请求都必须在两台服务器上执行，而读请求只需要在一台服务器上执行")]),r._v("，否则就没有容错性了。因为如果读请求也需要从两台服务器读数据，那么一台服务器故障我们就没法提供服务了。现在问题来了，假设客户端C1和C2都想执行写请求，其中一个要写X为1，另一个写X为2。C1会将写X为1的请求发送个两个服务器，因为我们想要更新两台服务器上的数据。C2也会将写X为2的请求发送给两个服务器。")],1),r._v(" "),_("p",[r._v("这里会出现什么错误呢？是的，我们没有做任何事情来保障两台服务器以相同的顺序处理这2个请求。如果服务器1（S1）先处理C1的请求，那么在它的表单里面，X先是1，之后S1看到了来自C2的请求，会将自己表单中的X覆盖成2。但是，如果S2恰好以不同的顺序收到客户端请求，那么S2会先执行C2的请求，将X设置为2，之后收到C1的请求，将X设置为1。")]),r._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/inconsistent_example.png",alt:"image-20240528104959963"}})]),r._v(" "),_("p",[r._v("之后，如果另外一些客户端，假设C3从S1读数据，C4从S2读数据，我们就会面临一个可怕的场景：这两个客户端读取的数据不一样。但是从前一个例子中的简单模型可以看出，相连的读请求应该读出相同的数据。")]),r._v(" "),_("p",[r._v("这里的问题可以以另一种方式暴露出来。假设我们尝试修复上面的问题，我们让客户端在S1还在线的时候，只从S1读取数据，S1不在线了再从S2读取数据。这样最开始所有的客户端读X都能得到2。但是突然，如果S1故障了，尽管没有写请求将X改成1，客户端读X得到的数据将会从2变成1。因为S1故障之后，所有的客户端都会切换到S2去读数据。这种数据的神奇变化与任何写操作都没有关联，并且也不可能在前一个例子的简单模型中发生。")]),r._v(" "),_("p",[r._v("当然，这里的问题是可以修复的，修复需要服务器之间更多的通信，并且复杂度也会提升。由于获取强一致会带来不可避免的复杂性的提升，有大量的方法可以在好的一致性和一些小瑕疵行为之间追求一个平衡。")]),r._v(" "),_("h2",{attrs:{id:"_3-gfs设计目标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-gfs设计目标"}},[r._v("#")]),r._v(" 3 GFS设计目标")]),r._v(" "),_("p",[r._v("Google的目标是构建一个大型且快速的文件系统（GFS），以便各种应用程序都能全局访问数据。传统的方法是为每个应用程序构建特定的存储系统，但这会导致重复建设。GFS 作为一个全局通用的存储系统，允许不同应用程序共享和访问数据。例如，存储了大量互联网抓取数据后，其他用户可以通过申请权限查看这些数据，因为大家使用的是同一个存储系统。这样，Google 内部的人员可以根据名字读取 GFS 中可共享的内容。")]),r._v(" "),_("p",[r._v("为了实现大容量和高速性能，GFS 将数据文件自动分割并存储在多台服务器上，这样可以并行读取同一个文件，从而获得更高的聚合吞吐量。文件分割存储还允许存储比单个磁盘更大的文件。由于存储系统分布在数百台服务器上，GFS 具备自动故障修复功能，不需要人工干预来修复服务器或迁移数据。")]),r._v(" "),_("p",[r._v("GFS 的一些特征并非设计目标。例如，GFS 只在一个数据中心内运行，多个副本并未分布在全球各地。理论上，数据副本应该地理分散，但实现起来很难，所以 GFS 局限于单个数据中心内。")]),r._v(" "),_("p",[r._v("此外，GFS 面向 Google 内部使用，供工程师开发应用程序，并不直接面向普通用户。虽然 Google 可能会出售基于 GFS 的服务，但 GFS 本身并不对外提供。")]),r._v(" "),_("p",[r._v("最后，GFS 专注于对大型顺序文件的读写优化。例如，银行账户系统需要能够读写小数据块的数据库，而 GFS 针对 TB 级别的文件进行优化，只支持顺序处理而非随机访问。某种程度上，它更像批处理系统，注重巨大的吞吐量而非低延迟，每次操作都涉及 MB 级别的数据。")]),r._v(" "),_("h2",{attrs:{id:"_4-master节点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-master节点"}},[r._v("#")]),r._v(" 4 Master节点")]),r._v(" "),_("p",[r._v("假设我们有上百个客户端和一个Master节点。虽然实际中可以有多台机器作为Master节点，但GFS中Master采用Active-Standby模式（系统包含两个或多个实例，其中一个实例（Active）正在运行并处理所有的请求，而其他实例（Standby）则处于待命状态，准备在Active实例发生故障时立即接管工作。），所以只有一个Master节点在工作。Master节点保存了文件名和存储位置的对应关系。除此之外，还有大量的Chunk服务器，每个Chunk服务器上都有1-2块磁盘。")]),r._v(" "),_("p",[r._v("Master节点管理文件和Chunk的信息，而Chunk服务器存储实际数据。这种设计将管理和存储分开处理，提高了系统效率。在GFS中，Master节点知道每个文件对应的所有Chunk handle，这些Chunk每个是64MB大小，共同构成一个文件。例如，一个1GB的文件会分成多个Chunk，Master节点知道每个Chunk存储在哪。读取文件时，需要先向Master节点查询Chunk位置，然后从对应的Chunk服务器读取数据。")]),r._v(" "),_("p",[r._v("我们需要了解Master节点内保存的数据内容，这里我们关心的主要是两个表单：")]),r._v(" "),_("ol",[_("li",[_("strong",[r._v("文件名到Chunk handle的对应关系")]),r._v("：Master节点有一个表单记录了文件名到Chunk handle数组的对应关系。")]),r._v(" "),_("li",[_("strong",[r._v("Chunk handle到Chunk数据的对应关系")]),r._v("：另一个表单记录了Chunk handle和它们的数据的对应关系，包括每个Chunk的服务器列表、当前版本号、主Chunk（Primary Chunk）和租约过期时间。")])]),r._v(" "),_("p",[r._v("这些数据都存储在内存中，但为了防止数据丢失，Master节点也将部分数据存储在磁盘上。Master节点的写操作会记录到磁盘的日志（log）中，并定期生成检查点（CheckPoint）。")]),r._v(" "),_("p",[r._v("有些数据需要存在磁盘上，而有些不用。它们分别是：")]),r._v(" "),_("ul",[_("li",[_("strong",[r._v("Chunk Handle数组")]),r._v("（非易失性，NV）：保存到磁盘上。")]),r._v(" "),_("li",[_("strong",[r._v("Chunk服务器列表")]),r._v("（易失性，V）：不用写入磁盘，重启后可重新获取。")]),r._v(" "),_("li",[_("strong",[r._v("版本号")]),r._v("（非易失性，NV）：写入磁盘，确保数据一致性。")]),r._v(" "),_("li",[_("strong",[r._v("主Chunk的handle")]),r._v("（易失性，V）：不写入磁盘，重启后可重新分配。")]),r._v(" "),_("li",[_("strong",[r._v("租约过期时间")]),r._v("（易失性，V）：不写入磁盘。")])]),r._v(" "),_("p",[r._v("当文件扩展到新的64MB或主Chunk变更时，Master节点会向磁盘日志中追加记录。这种日志追加方式比数据库高效，因为它只需顺序写入，不涉及磁盘的随机访问。")]),r._v(" "),_("p",[r._v("Master节点故障重启时，会从最近的检查点开始恢复状态，然后通过执行日志中的记录恢复到最新状态。这种方式避免了从日志最开始重建状态的低效问题。")]),r._v(" "),_("h2",{attrs:{id:"_5-读文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-读文件"}},[r._v("#")]),r._v(" 5 读文件")]),r._v(" "),_("p",[r._v("对于读请求来说，应用程序或GFS客户端会提供一个文件名和读取的偏移量（offset）。首先，客户端将这些信息发送给Master节点。Master节点从自己的文件表单中查找文件名，获取对应的Chunk handle数组。每个Chunk大小为64MB，因此可以通过偏移量除以64MB来确定对应的Chunk handle。接着，Master节点从Chunk表单中找到包含该Chunk的服务器列表，并将这个列表返回给客户端。")]),r._v(" "),_("p",[r._v("具体步骤如下：")]),r._v(" "),_("ol",[_("li",[r._v("客户端（或应用程序）将文件名和偏移量发送给Master节点。")]),r._v(" "),_("li",[r._v("Master节点将Chunk Handle（即Chunk ID）和服务器列表发送给客户端。")])]),r._v(" "),_("p",[r._v("客户端接下来可以从服务器列表中选择一个服务器来读取数据。根据GFS论文的描述，客户端会选择一个在网络上最近的服务器（在Google的数据中心中，通过IP地址的差异可以判断网络位置的远近），然后将读请求发送到这个服务器。由于客户端每次可能只读取1MB或64KB的数据，它可能会多次读取同一个Chunk的不同部分。为此，客户端会缓存Chunk和服务器的对应关系，这样在后续读取相同Chunk数据时，不需要每次都向Master请求相同的信息。")]),r._v(" "),_("p",[r._v("接下来，客户端会与选定的Chunk服务器通信，将Chunk Handle和偏移量发送给该服务器。Chunk服务器在本地硬盘上将每个Chunk存储为独立的Linux文件，并通过普通的Linux文件系统进行管理。可以推测，Chunk文件会按照Handle（即ID）命名。因此，Chunk服务器需要做的就是根据文件名找到对应的Chunk文件，从文件中读取相应的数据段，并将数据返回给客户端。")]),r._v(" "),_("h2",{attrs:{id:"_6-写文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-写文件"}},[r._v("#")]),r._v(" 6 写文件")]),r._v(" "),_("p",[r._v("对于应用程序来说，写文件的过程与读文件的接口非常类似，都是通过调用GFS的库函数进行操作。在写文件时，应用程序会告诉库函数，要将缓冲区中的数据追加到指定文件中。为了简化讨论，我们只考虑GFS论文中的记录追加（Record Append）的情况。")]),r._v(" "),_("p",[r._v("所以再次描述一下，对于写文件，客户端会向Master节点发送请求说：我想向这个文件名对应的文件追加数据，请告诉我文件中最后一个Chunk的位置。")]),r._v(" "),_("p",[r._v("当有多个客户端同时写同一个文件时，一个客户端并不能知道文件究竟有多长。因为如果只有一个客户端在写文件，客户端自己可以记录文件长度，而多个客户端时，一个客户端没法知道其他客户端写了多少。例如，不同客户端写同一份日志文件，没有一个客户端会知道文件究竟有多长，因此也就不知道该往什么样的偏移量，或者说向哪个Chunk去追加数据。这个时候，客户端可以向Master节点查询哪个Chunk服务器保存了文件的最后一个Chunk。")]),r._v(" "),_("p",[r._v("对于读操作，可以从任何最新的Chunk副本读取数据，但写操作必须通过Chunk的主副本（Primary Chunk）进行。Master节点需要确保Chunk的主副本存在。如果不存在，Master节点会查找所有存有该Chunk最新副本的Chunk服务器。Master节点确定哪些副本是最新的（副本中保存的版本号与Master中记录的Chunk的版本号一致），并从中选择一个作为Primary，其余作为Secondary。")]),r._v(" "),_("p",[r._v("之后，Master节点增加Chunk的版本号，并将新的版本号写入磁盘。Master节点通知Primary和Secondary服务器新的Chunk版本号，并指定它们的角色。Primary和Secondary服务器将新版本号存储在本地磁盘中，以便在重启时报告给Master。")]),r._v(" "),_("p",[r._v("所以客户端将要追加的数据发送给Primary和Secondary服务器，这些服务器将数据写入临时位置。所以最开始，这些数据不会追加到文件中。当所有服务器确认数据已写入临时位置后，客户端向Primary发送消息，要求将数据追加到文件中。Primary按照顺序处理来自多个客户端的并发请求，确保每次只执行一个请求。Primary将数据写入Chunk的末尾，并通知所有Secondary服务器也将数据写入它们的Chunk末尾。")]),r._v(" "),_("p",[r._v("Secondary服务器将数据写入本地磁盘后，向Primary发送确认消息。如果所有Secondary服务器成功写入数据并回复“yes”，Primary向客户端返回写入成功。如果任何Secondary服务器写入失败，Primary向客户端返回写入失败。")]),r._v(" "),_("p",[r._v("如果客户端接到写入失败的消息，应重新发起整个追加过程。首先，客户端再次与Master节点交互，找到文件末尾的Chunk，然后重新向Primary和Secondary发起追加操作。")]),r._v(" "),_("h2",{attrs:{id:"_7-gfs的一致性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-gfs的一致性"}},[r._v("#")]),r._v(" 7 GFS的一致性")]),r._v(" "),_("p",[r._v("在GFS中，追加数据的过程相对复杂。我们通过一个例子来解释这一过程。")]),r._v(" "),_("ol",[_("li",[_("p",[r._v("**数据追加请求：**客户端发送一个追加数据的请求，例如数据A，要将数据A追加到文件末尾。Chunk的三个副本（一个Primary和两个Secondary）都成功将数据A追加到了Chunk中，因此Chunk中的第一个记录是A。")])]),r._v(" "),_("li",[_("p",[r._v("**网络问题导致的部分写入：**第二个客户端加入，想要追加数据B。但由于网络问题，消息只被Primary和一个Secondary收到并处理。因此，两个副本追加了数据B，而另一个副本没有。")])]),r._v(" "),_("li",[_("p",[r._v("**后续写入：**第三个客户端想要追加数据C，并且Primary选择了偏移量并通知Secondary。三个副本都成功追加了数据C。")])]),r._v(" "),_("li",[_("p",[r._v("**处理写入失败：**由于网络问题，第二个客户端会收到写入失败的回复，并重新发起追加数据B的请求。假设这次数据B没有丢包，三个副本都成功追加了数据B。现在，三个副本都在线，并且都有最新的版本号。")])]),r._v(" "),_("li",[_("p",[r._v("**读取数据的影响：**客户端读取文件时，读取的内容取决于读取的是哪个副本。例如：")]),r._v(" "),_("ul",[_("li",[r._v("读取第一个副本时，可能会看到数据A、B、C，然后是重复的B。")]),r._v(" "),_("li",[r._v("读取第三个副本时，可能会看到数据A、一个空白数据、然后是C、B。")])]),r._v(" "),_("p",[r._v("所以不同的读请求可能得到不同的结果，具体取决于读取的是哪个副本。")])]),r._v(" "),_("li",[_("p",[r._v("**处理写入失败的复杂情况：**在最坏情况下，某个Secondary未能成功执行数据追加操作，客户端从Primary收到写入失败的回复。在客户端重新发送写文件请求之前，客户端可能故障，导致数据D只存在于某些副本中，而其他副本完全没有。")])])]),r._v(" "),_("p",[r._v("在GFS的这种工作方式下，如果Primary返回写入成功，一切正常。如果Primary返回写入失败，不同副本的数据可能不同。GFS的设计简单，但可能会暴露一些奇怪的数据顺序问题。应用程序需要容忍数据乱序，或通过在文件中写入序列号来识别顺序。如果应用程序对数据顺序敏感，可以避免并发写入，例如，电影文件的写入应使用一个客户端顺序追加数据。")]),r._v(" "),_("p",[_("img",{attrs:{src:"https://raw.githubusercontent.com/unique-pure/NewPicGoLibrary/main/img/GFS_Write_Example.png",alt:"4f013eecba1d5a096fdac0325605e35f"}})]),r._v(" "),_("p",[r._v("如果要将GFS升级为强一致系统，需要考虑以下几点：")]),r._v(" "),_("ol",[_("li",[r._v("**检测重复请求：**Primary需要能够检测重复的请求，确保数据不会重复写入。")]),r._v(" "),_("li",[r._v("**Secondary的强制执行：**Secondary必须执行Primary的请求，而不能简单地返回错误。对于永久性故障的Secondary，需要有机制将其移除。")]),r._v(" "),_("li",[r._v("**两阶段提交：**写请求需要两个阶段：首先Primary向Secondary发出请求并等待确认；如果所有Secondary都确认，Primary再指示实际执行操作。")]),r._v(" "),_("li",[r._v("**处理Primary崩溃：**当Primary崩溃时，新Primary需要与Secondary同步，确保操作历史一致。")]),r._v(" "),_("li",[r._v("**Secondary的租约系统：**Secondary需要一个类似Primary的租约系统，确保在合法时间内响应客户端请求。")])]),r._v(" "),_("p",[r._v("总体而言，GFS取得了巨大的成功，许多Google的应用都依赖于它。例如，BigTable和MapReduce等关键基础架构都是构建在GFS之上的，因此GFS在Google内部得到了广泛应用。然而，GFS也有其局限性，最严重的问题在于它只有一个Master节点，这带来了以下几个问题：")]),r._v(" "),_("ol",[_("li",[_("p",[r._v("**内存限制：**Master节点必须为每个文件和每个Chunk维护表单。随着使用量的增加，文件数量不断上升，最终Master节点会耗尽内存来存储这些表单。虽然可以增加内存，但单台计算机的内存总有上限，这成为了早期遇到的一个显著问题。")])]),r._v(" "),_("li",[_("p",[r._v("**处理能力：**单个Master节点需要处理数千个客户端的请求，而其CPU每秒只能处理数百个请求。尤其当Master节点还需要将部分数据写入磁盘时，这个问题变得更加严重，导致客户端数量很快超过了单个Master的处理能力。")])]),r._v(" "),_("li",[_("p",[r._v("**复杂的语义：**应用程序发现很难处理GFS复杂的语义，特别是副本数据同步问题（或不同步问题），这在一定程度上增加了开发难度。")])]),r._v(" "),_("li",[_("p",[r._v("**故障切换：**从GFS论文中可以了解到，Master节点的故障切换不是自动的。当Master节点永久故障时，需要人工干预来更换新的服务器，这可能需要几十分钟甚至更长时间来处理。对于某些应用程序来说，这样的停机时间是不可接受的。")])])]),r._v(" "),_("h2",{attrs:{id:"_8-faq"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-faq"}},[r._v("#")]),r._v(" 8 FAQ")]),r._v(" "),_("blockquote",[_("ol",[_("li",[r._v("应用程序如何知道Chunk的哪些部分由填充和重复记录组成？")])]),r._v(" "),_("p",[r._v("为了检测填充，应用程序可以在有效记录的开头放置一个可预测的幻数，或者包含一个校验和，该校验和可能仅在记录有效时才有效。应用程序可以通过在记录中包含唯一 ID 来检测重复项。然后，如果它读取的记录与之前的记录具有相同的 ID，它就知道它们是彼此的重复项。 GFS 为处理这些情况的应用程序提供了一个库。 GFS 设计的这一方面有效地将复杂性从 GFS 转移到了应用程序，但这可能并不理想。")]),r._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[r._v("怎样知道一个文件存储在哪台机器上？")])]),r._v(" "),_("p",[r._v("根据master中文件到chunk再到chunk位置的映射来定位具体的chunkserver。")]),r._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[r._v("论文提到了引用计数——它们是什么？")])]),r._v(" "),_("p",[r._v("它们是快照写时复制实现的一部分。当GFS创建快照时，它不会复制块，而是增加每个块的引用计数器。这使得创建快照的成本很低。如果客户端写入一个chunk并且主服务器注意到引用计数大于 1，则主服务器首先创建一个副本，以便客户端可以更新该副本（而不是属于快照一部分的块）。您可以将此视为延迟复制，直到绝对必要为止。希望并非所有块都会被修改，并且可以避免制作一些副本。")]),r._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[r._v("什么是租约？")])]),r._v(" "),_("p",[r._v("对于 GFS，租约是master授予 chunkserver 充当特定 chunk 的主chunkserver的能力的一段时间。master保证在租约期间不会分配不同的主chunkserver，并且主服务器同意在租约到期之前停止充当主chunkserver（除非主chunkserver要求master延长租约）。租约是避免主chunkserver必须反复询问master是否仍然是主chunkserver的一种方法—它知道它可以在下一分钟（或无论租约间隔是多少）充当主chunkserver，而无需再次与master通信。")]),r._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[r._v("什么是内部碎片？为什么惰性分配有帮助？")])]),r._v(" "),_("p",[r._v("内部碎片是当系统使用大于所请求分配所需的分配单元时浪费的空间。如果 GFS 以 64MB 为单位分配磁盘空间，那么一个 1 字节的文件将浪费近 64MB 的磁盘空间。 GFS 通过延迟分配磁盘空间来避免这个问题。每个块都是一个Linux文件，Linux文件系统使用的块大小为几十KB；"),_("font",{attrs:{color:"red"}},[r._v("因此，当应用程序创建一字节 GFS 文件时，该文件的块仅消耗 1 个 Linux 磁盘块，而不是 64 MB")]),r._v("。")],1),r._v(" "),_("ol",{attrs:{start:"6"}},[_("li",[r._v("Google 还在使用 GFS 吗？")])]),r._v(" "),_("p",[r._v("有传言称 GFS 已被 Colossus 所取代，总体目标相同，但在主性能和容错性方面有所改进。此外，Google内部的许多应用程序已经转向更多类似数据库的存储系统，例如BigTable和Spanner。然而，GFS 的大部分设计仍然存在于 HDFS（Hadoop 开源 MapReduce 的存储系统）中。")])])])}),[],!1,null,null,null);_.default=e.exports}}]);