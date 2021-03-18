(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{385:function(t,v,_){"use strict";_.r(v);var T=_(3),e=Object(T.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"http协议简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http协议简介"}},[t._v("#")]),t._v(" HTTP协议简介")]),t._v(" "),_("p",[t._v("超文本传输协议（"),_("code",[t._v("HyperText Transfer Protocol")]),t._v("，缩写：HTTP）是一种用于分布式、协作式和超媒体信息系统的应用层协议。HTTP是万维网的数据通信的基础。")]),t._v(" "),_("p",[t._v("HTTP的发展是由蒂姆·伯纳斯-李于1989年在欧洲核子研究组织（CERN）所发起。HTTP的标准制定由万维网协会（World Wide Web Consortium，W3C）和互联网工程任务组（Internet Engineering Task Force，IETF）进行协调，最终发布了一系列的RFC，其中最著名的是1999年6月公布的 RFC 2616，定义了HTTP协议中现今广泛使用的一个版本——HTTP 1.1。")]),t._v(" "),_("p",[t._v("2014年12月，互联网工程任务组（IETF）的Hypertext Transfer Protocol Bis（httpbis）工作小组将HTTP/2标准提议递交至IESG进行讨论，于2015年2月17日被批准。 HTTP/2标准于2015年5月以RFC 7540正式发表，取代HTTP 1.1成为HTTP的实现标准。")]),t._v(" "),_("h2",{attrs:{id:"http协议概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http协议概述"}},[t._v("#")]),t._v(" HTTP协议概述")]),t._v(" "),_("p",[t._v("HTTP是一个客户端终端（用户）和服务器端（网站）请求和应答的标准（TCP）。通过使用网页浏览器、网络爬虫或者其它的工具，客户端发起一个HTTP请求到服务器上指定端口（默认端口为80）。我们称这个客户端为用户代理程序（user agent）。应答的服务器上存储着一些资源，比如HTML文件和图像。我们称这个应答服务器为源服务器（origin server）。在用户代理和源服务器中间可能存在多个“中间层”，比如代理服务器、网关或者隧道（tunnel）。")]),t._v(" "),_("p",[t._v("尽管TCP/IP协议是互联网上最流行的应用，HTTP协议中，并没有规定必须使用它或它支持的层。事实上，HTTP可以在任何互联网协议上，或其他网络上实现。HTTP假定其下层协议提供可靠的传输。因此，任何能够提供这种保证的协议都可以被其使用。因此也就是其在TCP/IP协议族使用TCP作为其传输层。")]),t._v(" "),_("p",[t._v('通常，由HTTP客户端发起一个请求，创建一个到服务器指定端口（默认是80端口）的TCP连接。HTTP服务器则在那个端口监听客户端的请求。一旦收到请求，服务器会向客户端返回一个状态，比如"HTTP/1.1 200 OK"，以及返回的内容，如请求的文件、错误消息、或者其它信息。')]),t._v(" "),_("h2",{attrs:{id:"http工作原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http工作原理"}},[t._v("#")]),t._v(" HTTP工作原理")]),t._v(" "),_("p",[t._v("HTTP协议定义Web客户端如何从Web服务器请求Web页面，以及服务器如何把Web页面传送给客户端。HTTP协议采用了请求/响应模型。客户端向服务器发送一个请求报文，请求报文包含请求的方法、URL、协议版本、请求头部和请求数据。服务器以一个状态行作为响应，响应的内容包括协议的版本、成功或者错误代码、服务器信息、响应头部和响应数据。")]),t._v(" "),_("ol",[_("li",[t._v("客户端连接到Web服务器：")])]),t._v(" "),_("p",[t._v("一个HTTP客户端，通常是浏览器，与Web服务器的HTTP端口（默认为80）建立一个TCP套接字连接。")]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("发送HTTP请求")])]),t._v(" "),_("p",[t._v("通过TCP套接字，客户端向Web服务器发送一个文本的请求报文，一个请求报文由请求行、请求头部、空行和请求数据4部分组成。")]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("服务器接受请求并返回HTTP响应")])]),t._v(" "),_("p",[t._v("Web服务器解析请求，定位请求资源。服务器将资源复本写到TCP套接字，由客户端读取。一个响应由状态行、响应头部、空行和响应数据4部分组成。")]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[t._v("释放连接TCP连接")])]),t._v(" "),_("p",[t._v("若connection 模式为close，则服务器主动关闭TCP连接，客户端被动关闭连接，释放TCP连接;若connection 模式为keepalive，则该连接会保持一段时间，在该时间内可以继续接收请求")]),t._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[t._v("客户端浏览器解析HTML内容")])]),t._v(" "),_("p",[t._v("客户端浏览器首先解析状态行，查看表明请求是否成功的状态代码。然后解析每一个响应头，响应头告知以下为若干字节的HTML文档和文档的字符集。客户端浏览器读取响应数据HTML，根据HTML的语法对其进行格式化，并在浏览器窗口中显示。")]),t._v(" "),_("p",[_("img",{attrs:{src:"/blog-vuepress/2020/0928/877318-20180418160227278-698810818.png",alt:""}})]),t._v(" "),_("p",[_("strong",[t._v("http协议是基于TCP/IP协议之上的应用层协议")])]),t._v(" "),_("p",[_("strong",[t._v("基于 请求-响应 的模式")])]),t._v(" "),_("p",[t._v("HTTP协议规定,请求从客户端发出,最后服务器端响应该请求并 返回。换句话说,肯定是先从客户端开始建立通信的,服务器端在没有 接收到请求之前不会发送响应")]),t._v(" "),_("p",[_("img",{attrs:{src:"/blog-vuepress/2020/0928/877318-20180418160433297-1726664935.png",alt:""}})]),t._v(" "),_("p",[_("strong",[t._v("无状态保存")])]),t._v(" "),_("p",[t._v("HTTP是一种不保存状态,即无状态(stateless)协议。HTTP协议 自身不对请求和响应之间的通信状态进行保存。也就是说在HTTP这个 级别,协议对于发送过的请求或响应都不做持久化处理。")]),t._v(" "),_("p",[_("img",{attrs:{src:"/blog-vuepress/2020/0928/877318-20180418160546133-1479186889.png",alt:""}})]),t._v(" "),_("p",[t._v("使用HTTP协议,每当有新的请求发送时,就会有对应的新响应产 生。协议本身并不保留之前一切的请求或响应报文的信息。这是为了更快地处理大量事务,确保协议的可伸缩性,而特意把HTTP协议设计成 如此简单的。可是,随着Web的不断发展,因无状态而导致业务处理变得棘手 的情况增多了。比如,用户登录到一家购物网站,即使他跳转到该站的 其他页面后,也需要能继续保持登录状态。针对这个实例,网站为了能 够掌握是谁送出的请求,需要保存用户的状态。HTTP/1.1虽然是无状态协议,但为了实现期望的保持状态功能, 于是引入了Cookie技术。有了Cookie再用HTTP协议通信,就可以管 理状态了。")]),t._v(" "),_("p",[_("strong",[t._v("无连接")])]),t._v(" "),_("p",[t._v("无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间，并且可以提高并发性能，不能和每个用户建立长久的连接，请求一次相应一次，服务端和客户端就中断了。但是无连接有两种方式，早期的http协议是一个请求一个响应之后，直接就断开了，但是现在的http协议1.1版本不是直接就断开了，而是等几秒钟，这几秒钟是等什么呢，等着用户有后续的操作，如果用户在这几秒钟之内有新的请求，那么还是通过之前的连接通道来收发消息，如果过了这几秒钟用户没有发送新的请求，那么就会断开连接，这样可以提高效率，减少短时间内建立连接的次数，因为建立连接也是耗时的，默认的好像是3秒中现在，但是这个时间是可以通过咱们后端的代码来调整的，自己网站根据自己网站用户的行为来分析统计出一个最优的等待时间。")]),t._v(" "),_("h2",{attrs:{id:"http请求方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http请求方法"}},[t._v("#")]),t._v(" HTTP请求方法")]),t._v(" "),_("p",[t._v("HTTP/1.1协议中共定义了八种方法（也叫“动作”）来以不同方式操作指定的资源：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("GET")]),t._v(":向指定的资源发出“显示”请求。使用GET方法应该只用在读取数据，而不应当被用于产生“副作用”的操作中，例如在Web Application中。其中一个原因是GET可能会被网络蜘蛛等随意访问。")]),t._v(" "),_("li",[_("code",[t._v("HEAD")]),t._v(":与GET方法一样，都是向服务器发出指定资源的请求。只不过服务器将不传回资源的本文部分。它的好处在于，使用这个方法可以在不必传输全部内容的情况下，就可以获取其中“关于该资源的信息”（元信息或称元数据）。")]),t._v(" "),_("li",[_("code",[t._v("POST")]),t._v(":向指定资源提交数据，请求服务器进行处理（例如提交表单或者上传文件）。数据被包含在请求本文中。这个请求可能会创建新的资源或修改现有资源，或二者皆有。")]),t._v(" "),_("li",[_("code",[t._v("PUT")]),t._v(":向指定资源位置上传其最新内容。")]),t._v(" "),_("li",[_("code",[t._v("DELETE")]),t._v(":请求服务器删除Request-URI所标识的资源。")]),t._v(" "),_("li",[_("code",[t._v("TRACE")]),t._v(":回显服务器收到的请求，主要用于测试或诊断。")]),t._v(" "),_("li",[_("code",[t._v("OPTIONS")]),t._v(":这个方法可使服务器传回该资源所支持的所有HTTP请求方法。用'*'来代替资源名称，向Web服务器发送OPTIONS请求，可以测试服务器功能是否正常运作。")]),t._v(" "),_("li",[_("code",[t._v("CONNECT")]),t._v(":HTTP/1.1协议中预留给能够将连接改为管道方式的代理服务器。通常用于SSL加密服务器的链接（经由非加密的HTTP代理服务器）。")])]),t._v(" "),_("p",[_("code",[t._v("注意事项")]),t._v(":")]),t._v(" "),_("ol",[_("li",[t._v("方法名称是区分大小写的。当某个请求所针对的资源不支持对应的请求方法的时候，服务器应当返回状态码405（Method Not Allowed），当服务器不认识或者不支持对应的请求方法的时候，应当返回状态码501（Not Implemented）")]),t._v(" "),_("li",[t._v("HTTP服务器至少应该实现GET和HEAD方法，其他方法都是可选的。当然，所有的方法支持的实现都应当匹配下述的方法各自的语义定义。此外，除了上述方法，特定的HTTP服务器还能够扩展自定义的方法。例如PATCH（由 RFC 5789 指定的方法）用于将局部修改应用到资源")]),t._v(" "),_("li",[t._v("GET提交的数据会放在URL之后，也就是请求行里面，以?分割URL和传输数据，参数之间以&相连，如EditBook?name=test1&id=123456.（请求头里面那个content-type做的这种参数形式，后面讲） POST方法是把提交的数据放在HTTP包的请求体中")]),t._v(" "),_("li",[t._v("GET提交的数据大小有限制（因为浏览器对URL的长度有限制），而POST方法提交的数据没有限制.")]),t._v(" "),_("li",[t._v("GET与POST请求在服务端获取请求数据方式不同")])]),t._v(" "),_("h2",{attrs:{id:"http状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[t._v("#")]),t._v(" HTTP状态码")]),t._v(" "),_("p",[t._v("所有HTTP响应的第一行都是状态行，依次是当前HTTP版本号，3位数字组成的状态代码，以及描述状态的短语，彼此由空格分隔。")]),t._v(" "),_("p",[t._v("状态代码的第一个数字代表当前响应的类型：")]),t._v(" "),_("ul",[_("li",[t._v("1xx消息——请求已被服务器接收，继续处理")]),t._v(" "),_("li",[t._v("2xx成功——请求已成功被服务器接收、理解、并接受")]),t._v(" "),_("li",[t._v("3xx重定向——需要后续操作才能完成这一请求")]),t._v(" "),_("li",[t._v("4xx请求错误——请求含有词法错误或者无法被执行")]),t._v(" "),_("li",[t._v("5xx服务器错误——服务器在处理某个正确请求时发生错误")])]),t._v(" "),_("p",[_("img",{attrs:{src:"/blog-vuepress/2020/0928/877318-20180418161321986-304902913.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"url"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#url"}},[t._v("#")]),t._v(" URL")]),t._v(" "),_("p",[t._v("超文本传输协议（HTTP）的统一资源定位符将从因特网获取信息的五个基本元素包括在一个简单的地址中：")]),t._v(" "),_("ul",[_("li",[t._v("传送协议。")]),t._v(" "),_("li",[t._v("层级URL标记符号(为[//],固定不变)")]),t._v(" "),_("li",[t._v("访问资源需要的凭证信息（可省略）")]),t._v(" "),_("li",[t._v("服务器。（通常为域名，有时为IP地址）")]),t._v(" "),_("li",[t._v("端口号。（以数字方式表示，若为HTTP的默认值“:80”可省略）")]),t._v(" "),_("li",[t._v("路径。（以“/”字符区别路径中的每一个目录名称）")]),t._v(" "),_("li",[t._v("查询。（GET模式的窗体参数，以“?”字符为起点，每个参数以“&”隔开，再以“=”分开参数名称与数据，通常以UTF8的URL编码，避开字符冲突的问题）")]),t._v(" "),_("li",[t._v("片段。以“#”字符为起点")])]),t._v(" "),_("p",[t._v("由于超文本传输协议允许服务器将浏览器重定向到另一个网页地址，因此许多服务器允许用户省略网页地址中的部分，比如 www。从技术上来说这样省略后的网页地址实际上是一个不同的网页地址，浏览器本身无法决定这个新地址是否通，服务器必须完成重定向的任务。")]),t._v(" "),_("h2",{attrs:{id:"http请求格式-请求协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http请求格式-请求协议"}},[t._v("#")]),t._v(" HTTP请求格式(请求协议)")]),t._v(" "),_("p",[_("img",{attrs:{src:"/blog-vuepress/2020/0928/867021-20180322001733298-201433635.jpg",alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:"/blog-vuepress/2020/0928/877318-20180418160914403-902015370.png",alt:""}})]),t._v(" "),_("p",[t._v("请求头里面的内容举个例子：这个length表示请求体里面的数据长度，其他的请求头里面的这些键值对，陆续我们会讲的，大概知道一下就可以了，其中有一个user-agent，算是需要你记住的吧，就是告诉你的服务端，我是用什么给你发送的请求。")]),t._v(" "),_("p",[_("img",{attrs:{src:"/blog-vuepress/2020/0928/988061-20190217181850193-212820996.png",alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:"/blog-vuepress/2020/0928/988061-20190217182211177-715034357.png",alt:""}})]),t._v(" "),_("p",[t._v("看一个爬虫的例子，爬京东的时候没问题，但是爬抽屉的时候必须带着user-agent，因为抽屉对user-agent做了判断，来判断你是不是一个正常的请求，算是反扒机制的一种。")]),t._v(" "),_("p",[_("img",{attrs:{src:"/blog-vuepress/2020/0928/988061-20190217200715895-666653052.png",alt:""}})]),t._v(" "),_("p",[t._v("打开我们保存的demo.html文件，然后通过浏览器打开看看就能看到页面效果。")]),t._v(" "),_("p",[t._v("写上面这些内容的意思是让你知道有这么个请求头的存在，有些是有意义的，请求头我们还可以自己定义，就在requests模块里面那个headers={}，这个字典里面加就行。")]),t._v(" "),_("h2",{attrs:{id:"http响应格式（响应协议）"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http响应格式（响应协议）"}},[t._v("#")]),t._v(" HTTP响应格式（响应协议）")]),t._v(" "),_("p",[_("img",{attrs:{src:"/blog-vuepress/2020/0928/867021-20180322001744323-654009411.jpg",alt:""}})]),t._v(" "),_("p",[_("img",{attrs:{src:"/blog-vuepress/2020/0928/877318-20180418161014087-738990087.png",alt:""}})])])}),[],!1,null,null,null);v.default=e.exports}}]);