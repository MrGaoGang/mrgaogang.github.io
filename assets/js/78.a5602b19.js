(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{702:function(t,a,e){"use strict";e.r(a);var _=e(18),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"从一个示例开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从一个示例开始"}},[t._v("#")]),t._v(" 从一个示例开始")]),t._v(" "),e("p",[t._v("请看以下这个类图，类之间的关系是我们需要关注的：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://design-patterns.readthedocs.io/zh_CN/latest/_images/uml_class_struct.jpg",alt:"_images/uml_class_struct.jpg"}})]),t._v(" "),e("ul",[e("li",[t._v("车的类图结构为<"),e("abstract",[t._v(">，表示车是一个抽象类；")])],1),t._v(" "),e("li",[t._v("它有两个继承类：小汽车和自行车；它们之间的关系为实现关系，使用带空心箭头的虚线表示；")]),t._v(" "),e("li",[t._v("小汽车为与 SUV 之间也是继承关系，它们之间的关系为泛化关系，使用带空心箭头的实线表示；")]),t._v(" "),e("li",[t._v("小汽车与发动机之间是组合关系，使用带实心箭头的实线表示；")]),t._v(" "),e("li",[t._v("学生与班级之间是聚合关系，使用带空心箭头的实线表示；")]),t._v(" "),e("li",[t._v("学生与身份证之间为关联关系，使用一根实线表示；")]),t._v(" "),e("li",[t._v("学生上学需要用到自行车，与自行车是一种依赖关系，使用带箭头的虚线表示；")])]),t._v(" "),e("p",[t._v("下面我们将介绍这六种关系；")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"类之间的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类之间的关系"}},[t._v("#")]),t._v(" 类之间的关系")]),t._v(" "),e("h3",{attrs:{id:"泛化-继承关系-generalization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#泛化-继承关系-generalization"}},[t._v("#")]),t._v(" 泛化/继承关系(generalization)")]),t._v(" "),e("p",[t._v("类的继承结构表现在 UML 中为：泛化(generalize)与实现(realize)：")]),t._v(" "),e("p",[t._v("继承关系为 is-a 的关系；两个对象之间如果可以用 is-a 来表示，就是继承关系：（..是..)")]),t._v(" "),e("p",[t._v("eg：自行车是车、猫是动物")]),t._v(" "),e("p",[t._v("泛化关系用一条带空心箭头的直接表示；如下图表示（A 继承自 B）；")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://design-patterns.readthedocs.io/zh_CN/latest/_images/uml_generalization.jpg",alt:"_images/uml_generalization.jpg"}})]),t._v(" "),e("p",[t._v("eg：汽车在现实中有实现，可用汽车定义具体的对象；汽车与 SUV 之间为泛化关系；")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://design-patterns.readthedocs.io/zh_CN/latest/_images/uml_generalize.jpg",alt:"_images/uml_generalize.jpg"}})]),t._v(" "),e("p",[t._v("注：最终代码中，泛化关系表现为继承非抽象类；")]),t._v(" "),e("h3",{attrs:{id:"实现关系-realize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现关系-realize"}},[t._v("#")]),t._v(" 实现关系(realize)")]),t._v(" "),e("p",[t._v("实现关系用一条带空心箭头的虚线表示；")]),t._v(" "),e("p",[t._v("eg：”车”为一个抽象概念，在现实中并无法直接用来定义对象；只有指明具体的子类(汽车还是自行车)，才 可以用来定义对象（”车”这个类在 C++中用抽象类表示，在 JAVA 中有接口这个概念，更容易理解）")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://design-patterns.readthedocs.io/zh_CN/latest/_images/uml_realize.jpg",alt:"_images/uml_realize.jpg"}})]),t._v(" "),e("p",[t._v("注：最终代码中，实现关系表现为继承抽象类；")]),t._v(" "),e("h3",{attrs:{id:"聚合关系-aggregation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聚合关系-aggregation"}},[t._v("#")]),t._v(" 聚合关系(aggregation)")]),t._v(" "),e("p",[t._v("聚合关系用一条带空心菱形箭头的直线表示，如下图表示 A 聚合到 B 上，或者说 B 由 A 组成；")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://design-patterns.readthedocs.io/zh_CN/latest/_images/uml_aggregation.jpg",alt:"_images/uml_aggregation.jpg"}})]),t._v(" "),e("p",[t._v("聚合关系用于表示实体对象之间的关系，表示整体由部分构成的语义；例如一个部门由多个员工组成；")]),t._v(" "),e("p",[t._v("与组合关系不同的是，整体和部分不是强依赖的，即使整体不存在了，部分仍然存在；例如， 部门撤销了，人员不会消失，他们依然存在；")]),t._v(" "),e("h3",{attrs:{id:"组合关系-composition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#组合关系-composition"}},[t._v("#")]),t._v(" 组合关系(composition)")]),t._v(" "),e("p",[t._v("组合关系用一条带实心菱形箭头直线表示，如下图表示 A 组成 B，或者 B 由 A 组成；")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://design-patterns.readthedocs.io/zh_CN/latest/_images/uml_composition.jpg",alt:"_images/uml_composition.jpg"}})]),t._v(" "),e("p",[t._v("与聚合关系一样，组合关系同样表示整体由部分构成的语义；比如公司由多个部门组成；")]),t._v(" "),e("p",[t._v("但"),e("strong",[t._v("组合关系是一种强依赖的特殊聚合关系，如果整体不存在了，则部分也不存在了")]),t._v("；例如， 公司不存在了，部门也将不存在了；")]),t._v(" "),e("h3",{attrs:{id:"关联关系-association"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关联关系-association"}},[t._v("#")]),t._v(" 关联关系(association)")]),t._v(" "),e("p",[t._v("关联关系是用一条直线表示的；它描述不同类的对象之间的结构关系；它是一种静态关系， 通常与运行状态无关，一般由常识等因素决定的；它一般用来定义对象之间静态的、天然的结构； 所以，关联关系是一种“强关联”的关系；")]),t._v(" "),e("p",[t._v("比如，乘车人和车票之间就是一种关联关系；学生和学校就是一种关联关系；")]),t._v(" "),e("p",[t._v("关联关系默认不强调方向，表示对象间相互知道；如果特别强调方向，如下图，表示 A 知道 B，但 B 不知道 A；")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://design-patterns.readthedocs.io/zh_CN/latest/_images/uml_association.jpg",alt:"_images/uml_association.jpg"}})]),t._v(" "),e("p",[t._v("关联关系有"),e("strong",[t._v("单向关联和双向关联")]),t._v("。如果两个对象都知道（即可以调用）对方的公共属性和操作，那么二者就是双向关联。如果只有一个对象知道（即可以调用）另一个对象的公共属性和操作，那么就是单向关联。大多数关联都是单向关联，单向关联关系更容易建立和维护，有助于寻找可重用的类。")]),t._v(" "),e("p",[t._v("一个对象可以持有其它对象的数组或者集合。在UML中，通过放置"),e("strong",[t._v("多重性")]),t._v("（multipicity）表达式在关联线的末端来表示。"),e("strong",[t._v("多重性表达式可以是一个数字、一段范围或者是它们的组合")]),t._v("。多重性允许的表达式示例如下：")]),t._v(" "),e("ul",[e("li",[t._v("数字：精确的数量")]),t._v(" "),e("li",[e("em",[t._v("或者0..")]),t._v("：表示0到多个")]),t._v(" "),e("li",[t._v("0..1：表示0或者1个，在Java中经常用一个空引用来实现")]),t._v(" "),e("li",[t._v("1..*：表示1到多个")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.gaogangsever.cn/images/57d6fe109a8579b65b7ce8a780ff2230.png",alt:""}})]),t._v(" "),e("blockquote",[e("p",[t._v("注：在最终代码中，关联对象通常是以成员变量的形式实现的；")])]),t._v(" "),e("h3",{attrs:{id:"依赖关系-dependency"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖关系-dependency"}},[t._v("#")]),t._v(" 依赖关系(dependency)")]),t._v(" "),e("p",[t._v("依赖关系是用一套带箭头的虚线表示的；如下图表示 A 依赖于 B；他描述一个对象在运行期间会用到另一个对象的关系；")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://design-patterns.readthedocs.io/zh_CN/latest/_images/uml_dependency.jpg",alt:"_images/uml_dependency.jpg"}})]),t._v(" "),e("p",[t._v("与关联关系不同的是，它是一种临时性的关系，通常在运行期间产生，并且随着运行时的变化； 依赖关系也可能发生变化；")]),t._v(" "),e("p",[t._v("显然，依赖也有方向，双向依赖是一种非常糟糕的结构，我们总是应该保持单向依赖，杜绝双向依赖的产生；")]),t._v(" "),e("p",[t._v("注：在最终代码中，依赖关系体现为类构造方法及类方法的传入参数，箭头的指向为调用关系；依赖关系除了临时知道对方外，还是“使用”对方的方法和属性；")]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("p",[t._v("文章大部分内容摘录自: "),e("a",{attrs:{href:"https://design-patterns.readthedocs.io/zh_CN/latest/read_uml.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("看懂UML类图和时序图"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);