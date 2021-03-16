(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports={errorMessage:"ErrorMessage_errorMessage__2LRCk",appear:"ErrorMessage_appear__3TDxO",appearActive:"ErrorMessage_appearActive__3lA07",exit:"ErrorMessage_exit__3yk07",exitActive:"ErrorMessage_exitActive__22zYR"}},14:function(e,t,n){e.exports={container:"App_container__k8s8V",tittle:"App_tittle__2BiNM",appear:"App_appear__24wuW",appearActive:"App_appearActive__24cpE",filter:"App_filter__1YUrs"}},22:function(e,t,n){e.exports={enter:"ContactList_enter__2oN9M",enterActive:"ContactList_enterActive__2RAyX",exit:"ContactList_exit__30CmY",exitActive:"ContactList_exitActive__3AB88",button:"ContactList_button__38r5e",list:"ContactList_list__30gSV"}},30:function(e,t,n){e.exports={input:"Filter_input__1gwv8"}},39:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(39),n(11)),s=n(16),u=n(17),l=n(21),p=n(20),b=n(51),m=n(9),j=n.n(m),d=n(13),h=n.n(d),O=n(1),_=function(e){var t=e.message;return Object(O.jsx)(b.a,{appear:!0,in:!0,timeout:250,classNames:h.a,unmountOnExit:!0,children:Object(O.jsx)("div",{className:h.a.errorMessage,children:Object(O.jsx)("p",{children:t})})})},f=n(8),x=n(5),v=n(52),g=Object(x.b)("contacts/add",(function(e,t){return{payload:{id:Object(v.a)(),name:e,phone:t}}})),C=Object(x.b)("contacts/delete"),A=Object(x.b)("contacts/changeFilter"),y=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",phone:"",error:null},e.handleChangeForm=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(i.a)({},a,r))},e.handleFormSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.phone,c=e.props.onAdd;e.validateForm()||c(a,r),e.resetForm()},e.validateForm=function(){var t=e.state,n=t.name,a=t.phone,r=!!e.props.items.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}));return n&&a?r?(e.setState({error:"Contact is already exist"}),setTimeout((function(){e.setState({error:null})}),2e3)):void 0:(e.setState({error:"Some filed is empty"}),setTimeout((function(){e.setState({error:null})}),2e3))},e.resetForm=function(){e.setState({name:"",phone:""})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.phone,a=e.error;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("form",{className:j.a.form,onSubmit:this.handleFormSubmit,children:[Object(O.jsx)("label",{className:j.a.label,children:"name"}),Object(O.jsx)("input",{className:j.a.input,type:"text",name:"name",placeholder:"Enter name",value:t,onChange:this.handleChangeForm}),Object(O.jsx)("label",{className:j.a.label,children:"phone"}),Object(O.jsx)("input",{className:j.a.input,type:"tel",name:"phone",placeholder:"Enter phone number",value:n,onChange:this.handleChangeForm}),Object(O.jsx)("button",{className:j.a.button,type:"submit",children:"Add Contact"})]}),Object(O.jsx)(b.a,{appear:!0,in:null!==a,timeout:250,classNames:h.a,unmountOnExit:!0,children:Object(O.jsx)(_,{message:a})})]})}}]),n}(a.Component),N=Object(f.b)((function(e){return{items:e.contacts.items}}),(function(e){return{onAdd:function(t,n){return e(g(t,n))}}}))(y),F=n(53),E=n(22),k=n.n(E),S=function(e){Object(l.a)(n,e);var t=Object(p.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.onRemove;return Object(O.jsx)(F.a,{component:"ul",className:k.a.list,children:t.map((function(e){var t=e.name,a=e.phone,r=e.id;return Object(O.jsx)(b.a,{classNames:k.a,timeout:300,unmountOnExit:!0,children:Object(O.jsxs)("li",{children:[t,": ",a," ",Object(O.jsx)("button",{className:k.a.button,id:r,onClick:function(){return n(r)},children:"x"})]},r)},r)}))})}}]),n}(a.Component),w=Object(f.b)((function(e){var t=e.contacts,n=t.items,a=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(n,t.filter);return{items:a.length>0?a:n}}),(function(e){return{onRemove:function(t){return e(C(t))}}}))(S),L=n(30),M=n.n(L);var R=Object(f.b)((function(e){return{value:e.contacts.filter,items:e.contacts.items}}),(function(e){return{onChange:function(t){return e(A(t.target.value))}}}))((function(e){var t=e.value,n=void 0===t?"":t,a=e.onChange;return Object(O.jsx)("input",{className:M.a.input,type:"text",value:n,onChange:a,placeholder:"Enter name for Search"})})),T=n(14),Y=n.n(T);function B(e){return Object(O.jsxs)("div",{className:Y.a.container,children:[Object(O.jsx)(b.a,{in:!0,appear:!0,classNames:Y.a,timeout:500,unmountOnExit:!0,children:Object(O.jsx)("h2",{className:Y.a.tittle,children:"Phonebook"})}),Object(O.jsx)(N,{}),Object(O.jsxs)("div",{className:Y.a.filter,children:[Object(O.jsx)("h2",{children:"find contact"}),Object(O.jsx)(R,{})]}),Object(O.jsx)(w,{})]})}var D,z=n(19),J=n(2),V=Object(x.c)([],(D={},Object(i.a)(D,g,(function(e,t){return[t.payload].concat(Object(z.a)(e))})),Object(i.a)(D,C,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),D)),I=Object(x.c)("",Object(i.a)({},A,(function(e,t){return t.payload}))),K=Object(J.c)({items:V,filter:I}),P=n(31),U=n.n(P),W=n(6),X=n(32),q=n.n(X),G=[].concat(Object(z.a)(Object(x.d)({serializableCheck:{ignoredActions:[W.a,W.f,W.b,W.c,W.d,W.e]}})),[U.a]),H={key:"contacts",storage:q.a,blacklist:["filter"]},Q=Object(x.a)({reducer:{contacts:Object(W.g)(H,K)},middleware:G,devTools:!1}),Z={store:Q,persistor:Object(W.h)(Q)},$=n(33);o.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(f.a,{store:Z.store,children:Object(O.jsx)($.a,{loading:null,persistor:Z.persistor,children:Object(O.jsx)(B,{})})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={form:"ContactForm_form__2EtC3",label:"ContactForm_label__1KpOd",input:"ContactForm_input__3Au1s",button:"ContactForm_button__xYnOD"}}},[[49,1,2]]]);
//# sourceMappingURL=main.c6ab2d26.chunk.js.map