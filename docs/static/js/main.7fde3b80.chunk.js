(this["webpackJsonpgame-truth-or-dare"]=this["webpackJsonpgame-truth-or-dare"]||[]).push([[0],{86:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),E=n(15),s=n.n(E),O=n(7),c=n(29),A=n(9),o=n(17),r=n(18),d=n(1),S=function(){return Object(d.jsx)("footer",{className:"app__footer d-flex justify-content-center align-items-center",children:Object(d.jsxs)("span",{className:"text-white",children:[Object(d.jsx)(o.a,{icon:r.a})," Vision Company 2021"]})})},l=n(96),j=n(93),u=n(43),N=n(30),D=n(97),m=Object(i.createContext)(),I="[player] addPlayer",U="[player] deletePlayer",R=function(){var e=Object(i.useContext)(m),t=e.player,n=e.dispatch,a=function(e){n({type:U,payload:e.currentTarget.id})};return Object(d.jsx)(d.Fragment,{children:t.length<1?Object(d.jsx)("h3",{className:"text-center mt-3",children:"Para poder iniciar el juego debe a\xf1adir 2 jugadores o m\xe1s"}):Object(d.jsxs)(d.Fragment,{children:[t.length<=1?Object(d.jsx)("h3",{className:"text-center mt-3",children:"Para poder iniciar el juego debe a\xf1adir 2 jugadores o m\xe1s"}):null,Object(d.jsx)(D.a,{variant:"flush",children:t.map((function(e,t){return Object(d.jsxs)(D.a.Item,{className:"d-flex justify-content-between align-items-center",children:[Object(d.jsx)("span",{children:"".concat(t+1,". ").concat(e.option)}),Object(d.jsx)("div",{className:"main__opciones-player d-flex justify-content-between",children:Object(d.jsx)("span",{className:"pointer",id:e.id,onClick:a,children:Object(d.jsx)(o.a,{icon:r.c})})})]},e.id)}))})]})})},L=n(98),T=function(){var e=Object(i.useContext)(m).dispatch,t=Object(i.useState)(""),n=Object(O.a)(t,2),a=n[0],E=n[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(l.a,{children:Object(d.jsxs)(l.a.Group,{as:j.a,className:"mb-3",controlId:"formPlaintextEmail",children:[Object(d.jsx)(u.a,{sm:"12",md:"8",className:"",children:Object(d.jsx)(l.a.Control,{type:"text",placeholder:"Player name",value:a,onChange:function(e){E(e.target.value)}})}),Object(d.jsx)(u.a,{sm:"12",md:"4",className:"p-0 d-flex justify-content-center",children:Object(d.jsxs)(N.a,{variant:"primary",className:"",type:"button",onClick:function(){e({type:I,payload:{id:Object(L.a)(),option:a}}),E("")},children:["Add ",Object(d.jsx)(o.a,{icon:r.d})]})})]})}),Object(d.jsx)("div",{className:"main__content-list-player container",children:Object(d.jsx)(R,{})})]})},C=function(){var e=Object(i.useContext)(m).player;return Object(d.jsxs)("div",{className:"main__content text-white d-flex flex-column justify-content-around align-items-center mt-5",children:[Object(d.jsx)("div",{className:"main__title",children:Object(d.jsx)("span",{children:"Game Truth or Dare"})}),Object(d.jsx)("div",{className:"main__form-player",children:Object(d.jsx)(T,{})}),e.length>=2?Object(d.jsxs)(c.b,{to:"/player",className:"btn btn-primary",children:["Play ",Object(d.jsx)(o.a,{icon:r.b})]}):null]})},b=n(23),h=n(46),x=n(95),M=n(94),p=[{id:1,question:"\xbfCu\xe1l es tu peor h\xe1bito?"},{id:2,question:"DI ALGO QUE DESEES NUNCA HABER DICHO O HECHO"},{id:3,question:"DI ALGO MALO QUE HAYAS DICHO DE UNA PERSONA PRESENTE"},{id:4,question:"DI TU ARREPENTIMIENTO M\xc1S GRANDE"},{id:5,question:"DI LA \xdaLTIMA VEZ QUE TUVISTE RELACIONES SEXUALES"},{id:6,question:"\xbfLE HAS SIDO INFIEL A TU ACTUAL PAREJA?"},{id:7,question:"\xbfEN QU\xc9 HAS GASTADO DINERO \xdaLTIMAMENTE?"},{id:8,question:"DI 2 VERDADES Y UNA MENTIRA"},{id:9,question:"\xbfCU\xc1L HA SIDO EL MEJOR CONSEJO QUE TE HAN DADO Y QUI\xc9N?"},{id:10,question:"\xbfCU\xc1NDO FUE LA \xdaLTIMA MENTIRA QUE DIJISTE Y CU\xc1L?"},{id:11,question:"\xbfQU\xc9 HACES CUANDO EST\xc1S SOL@?"},{id:12,question:"\xbfCON CU\xc1L DE TUS EX'S VOLVER\xcdAS Y POR QU\xc9?"},{id:13,question:"\xbfA CU\xc1L AMIGO SACAR\xcdAS DEL CORO Y POR QU\xc9?"},{id:14,question:"\xbfCU\xc1L HA SIDO EL \xdaLTIMO RUMOR QUE HAN DICHO DE TI?"},{id:15,question:"SI PUDIERAS CAMBIAR DE VIDA CON ALGUIEN AQU\xcd, \xbfQUI\xc9N SER\xcdA?"},{id:16,question:"SI TUVIERAS QUE ELEGIR A DOS PERSONAS DE AQU\xcd (TOMANDO EN CUENTA QUE NO VOLVER\xc1S A VER A LAS DEM\xc1S), \xbfQUI\xc9NES SER\xcdAN?"},{id:17,question:"\xbfCU\xc1L HA SIDO EL REGALO M\xc1S BARATO QUE HAS COMPRADO?"},{id:18,question:"\xbfHAS SENTIDO ATRACCI\xd3N POR EL MISMO SEXO?"},{id:19,question:"DI UN DATO QUE TE averg\xfcence DECIR DE TI"},{id:20,question:"\xbfA QUI\xc9N ODIAR\xcdAS VER DESNUDO?"},{id:21,question:"\xbfCU\xc1L HA SIDO EL MENSAJE M\xc1S SUCIO QUE HAS RECIBIDO?"},{id:22,question:"\xbfCU\xc1L HA SIDO EL MEJOR D\xcdA DE TU VIDA?"},{id:23,question:"\xbfA QUI\xc9N PONDR\xcdAS COMO CONTACTO DE EMERGENCIA DE LOS JUGADORES?"},{id:24,question:"\xbfTIENES MIEDO A CRECER?"},{id:25,question:"\xbfCU\xc1NDO FUE LA \xdaLTIMA VEZ QUE LLORASTE?"},{id:26,question:"\xbfCU\xc1L ES TU POSESI\xd3N M\xc1S PRECIADA?"},{id:27,question:"\xbfHAS SABOTEADO INTENCIONALMENTE A UN COMPA\xd1ERO DE TRABAJO?"},{id:28,question:"\xbfCU\xc1L ES LA PEOR EXPERIENCIA \xcdNTIMA QUE HAS TENIDO?"},{id:29,question:"\xbfQU\xc9 ODIAS Y QUE LOS DEM\xc1S YA SABEN DE TI?"},{id:30,question:"\xbfCU\xc1L ES EL SUE\xd1O M\xc1S RARO QUE HAYAS TENIDO?"}],f=[{id:1,question:"DEBES ENSE\xd1AR GALER\xcdA POR 1 MINUTO (60 SEGUNDOS)"},{id:2,question:"DEBES DE MANDAR UN MENSAJE A UNO DE TUS EX'S CON EL QUE TENGAS CONTACTO"},{id:3,question:"DEBES DE LLAMAR A TU EX (DIRECTO, INSTAGRAM O WHATSAPP)"},{id:4,question:"VER EL CHAT CON TU EX O CON TU PAREJA ACTUAL POR 1 MINUTO (ESPEC\xcdFICAMENTE, MULTIMEDIA)"},{id:5,question:"VER EL CHAT CON TU EX O CON TU PAREJA ACTUAL POR 1 MINUTO (ESPEC\xcdFICAMENTE, MULTIMEDIA)"},{id:6,question:"DEBES DEJAR QUE EL GRUPO VEA EL \xc1LBUM OCULTO DE TU GALER\xcdA"},{id:7,question:"SUBIR UNA FOTO AL ESTADO (WS O IG) SELECCIONADA POR EL GRUPO"},{id:8,question:"CAMBIAR FOTO DE PERFIL A SELECCI\xd3N DE LOS DEM\xc1S JUGADORES"},{id:9,question:"DEBES DE MOSTRAR LOS DM DE INSTAGRAM"},{id:10,question:"PON 10 COSAS LIQUIDAS EN UN VASO Y TOMA"},{id:11,question:"DALE ME GUSTA A LOS PRIMEROS 15 POSTS EN INSTAGRAM"},{id:12,question:"DEBES DE COMER UNA BANANA LO M\xc1S SEXY QUE PUEDAS"},{id:13,question:"DEBES OLER LAS AXILAS DE UNO DE LOS JUGADORES"},{id:14,question:"DEBES OLER LOS PIES DE UNO DE LOS JUGADORES"},{id:15,question:"DEBES COLOCARTE TU ROPA AL REV\xc9S"},{id:16,question:"DEBES DARLE UN INSULTO PERSONALIZADO A TODOS LOS JUGADORES"},{id:17,question:"DEBES IMITAR COMO TIENES UN ORGASMO"},{id:18,question:"DEBES HACER UN STRIPPER PARA TODO LOS JUGADORES"},{id:19,question:"DEBES DECIR UNA COSA HONESTA SOBRE LOS JUGADORES "},{id:20,question:"DESLIZAR EN TU LISTA DE CONTACTOS Y DONDE CAIGA EL DEDO DEBES: LLAMAR, MENSAJEAR O ELIMINAR"},{id:21,question:"MOSTRAS \xc1LBUM DE LOS ELIMINADOS RECIENTEMENTE"},{id:22,question:"LLAMAR A UN AMIG@ Y FINGIR QUE ES SU CUMPLEA\xd1OS, Y CANTARLE HAPPY BIRTHDAY TO YOU"},{id:23,question:"DEBES SER EL CANTANTE DE UNA LA BANDA, SELECCIONA LOS JUGADORES QUE TE ACOMPA\xd1AR\xc1N"},{id:24,question:"HABLANOS DE TU PRIMER BESO"},{id:25,question:"DILE UN SECRETO A LA PERSONA DE TU IZQUIERDA"},{id:26,question:"PUBLICA LA \xdaLTIMA FOTO DE TU GALER\xcdA"},{id:27,question:"RESPONDE LAS PRIMERAS 5 HISTORIAS DE INSTAGRAM"},{id:28,question:"DEJA QUE LOS DEM\xc1S JUGADORES TE DEN ALGO DE COMER (DEBES TENER LOS OJOS VENDADOS)"},{id:29,question:"TE RETO A DECIR ALGO QUE TE HAGA FELIZ Y  QUE TU PADRES NO SE PUEDEN ENTERAR"},{id:30,question:"DEJA QUE LOS DEM\xc1S JUGADORES DIBUJEN ALGO EN TU PIEL Y PUBL\xcdCALA"},{id:31,question:"BEBE UNA LATA COMPLETA DE CERVEZA SIN PARAR"}],_=function(e){var t=e.show,n=e.setShow,a=e.player,E=Object(i.useState)(!1),s=Object(O.a)(E,2),c=s[0],A=s[1],o=Object(i.useState)(""),r=Object(O.a)(o,2),S=r[0],l=r[1],j=Object(i.useState)(0),u=Object(O.a)(j,2),D=u[0],m=u[1],I=function(e){A(!0),setTimeout((function(){A(!1),l(e),m("truth"===S?Math.floor(Math.floor(Math.random()*p.length)-1):Math.floor(Math.floor(Math.random()*f.length)-1))}),2e3)};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(x.a,{className:"",show:t,centered:!0,children:[Object(d.jsx)(x.a.Header,{className:"d-flex justify-content-center",children:Object(d.jsxs)(x.a.Title,{children:["\xbfChoose ",a," truth or dare?"]})}),Object(d.jsx)(x.a.Body,{children:Object(d.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:c?Object(d.jsx)("div",{className:"animate__animated animate__zoomIn",children:Object(d.jsx)(M.a,{animation:"border",variant:"light"})}):Object(d.jsx)(d.Fragment,{children:""===S?Object(d.jsxs)("div",{className:"animate__animated animate__zoomIn",children:[Object(d.jsx)(N.a,{variant:"primary",className:"me-2",onClick:function(){return I("truth")},children:"Truth"}),Object(d.jsx)(N.a,{variant:"primary",className:"me-2",onClick:function(){return I("dare")},children:"Dare"})]}):Object(d.jsxs)("div",{className:"d-flex flex-column align-items-center animate__animated animate__zoomIn",children:["truth"===S?Object(d.jsx)("span",{className:"player__pregunta animate__animated animate__zoomIn",children:p[D].question}):Object(d.jsx)("span",{className:"player__pregunta animate__animated animate__zoomIn",children:f[D].question}),Object(d.jsx)(N.a,{variant:"primary",className:"me-2 mt-3 animate__animated animate__zoomIn",onClick:function(){n(!1),l("")},children:"Done"})]})})})})]})})},q=function(){var e=Object(i.useContext)(m).player,t=Object(b.a)(e),n=Object(i.useState)(!1),a=Object(O.a)(n,2),E=a[0],s=a[1],c=Object(i.useState)(0),A=Object(O.a)(c,2),o=A[0],r=A[1],S=Object(i.useState)(!1),l=Object(O.a)(S,2),j=l[0],u=l[1];return Object(d.jsxs)("div",{className:"player__content text-white d-flex flex-column justify-content-around align-items-center animate__animated animate__zoomIn",children:[Object(d.jsx)("div",{className:"player__title mt-3",children:Object(d.jsx)("span",{children:"Players"})}),Object(d.jsx)(h.Wheel,{mustStartSpinning:E,prizeNumber:o,data:t,outerBorderColor:["#f2f2f2"],outerBorderWidth:[10],innerBorderColor:["#f2f2f2"],radiusLineColor:["#dedede"],radiusLineWidth:[10],textColors:["#ffffff"],fontSize:[25],backgroundColors:["#7829E7","#2A129A"],onStopSpinning:function(){s(!1),u(!0)}}),Object(d.jsx)(N.a,{variant:"primary",className:"",type:"button",onClick:function(){var e=Math.floor(Math.random()*t.length);r(e),s(!0)},children:"GO!"}),Object(d.jsx)(_,{show:j,setShow:u,player:t[o].option})]})},P=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"app__content d-flex justify-content-between",children:[Object(d.jsx)("div",{className:"app__content-img d-none d-md-flex align-items-center animate__animated animate__fadeInDown",children:Object(d.jsx)("img",{src:"./assets/truth-logo.jpeg",className:"",alt:"logo truth"})}),Object(d.jsx)("div",{className:"app__main animate__animated animate__zoomIn",children:Object(d.jsx)(c.a,{children:Object(d.jsxs)(A.c,{children:[Object(d.jsx)(A.a,{exact:!0,path:"/player",component:q}),Object(d.jsx)(A.a,{exact:!0,path:"/",component:C})]})})}),Object(d.jsx)("div",{className:"app__content-img d-none d-md-flex align-items-center animate__animated animate__fadeInUp",children:Object(d.jsx)("img",{src:"./assets/dare-logo.jpeg",className:"",alt:"logo dare"})})]}),Object(d.jsx)(S,{})]})},y=function(e,t){switch(t.type){case I:return[].concat(Object(b.a)(e),[t.payload]);case U:return e.filter((function(e){return e.id!==t.payload}));default:return e}},g=(n(63),n(64),n(85),n(86),function(){return JSON.parse(localStorage.getItem("player"))||[]}),B=function(){var e=Object(i.useReducer)(y,[],g),t=Object(O.a)(e,2),n=t[0],a=t[1];return Object(i.useEffect)((function(){localStorage.setItem("player",JSON.stringify(n))}),[n]),Object(d.jsx)(m.Provider,{value:{player:n,dispatch:a},children:Object(d.jsx)(P,{})})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.7fde3b80.chunk.js.map