"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[932],{6666:(A,g,a)=>{a.r(g),a.d(g,{LoginComponent:()=>x});var _=a(6814),r=a(95),p=a(1120),e=a(4769),u=a(5881);function d(n,i){1&n&&(e.TgZ(0,"p",16),e._uU(1," email is Required "),e.qZA())}function c(n,i){1&n&&(e.TgZ(0,"p",16),e._uU(1," email InValid Format "),e.qZA())}function f(n,i){if(1&n&&(e.TgZ(0,"div",14),e.YNc(1,d,2,0,"p",15),e.YNc(2,c,2,0,"p",15),e.qZA()),2&n){const l=e.oxw();let t,o;e.xp6(1),e.Q6J("ngIf",null==(t=l.loginForm.get("email"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=l.loginForm.get("email"))?null:o.getError("email"))}}function h(n,i){1&n&&(e.TgZ(0,"p",16),e._uU(1," password is Required "),e.qZA())}function Z(n,i){1&n&&(e.TgZ(0,"p",16),e._uU(1," must be at least 6 chars "),e.qZA())}function v(n,i){if(1&n&&(e.TgZ(0,"div",14),e.YNc(1,h,2,0,"p",15),e.YNc(2,Z,2,0,"p",15),e.qZA()),2&n){const l=e.oxw();let t,o;e.xp6(1),e.Q6J("ngIf",null==(t=l.loginForm.get("password"))?null:t.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=l.loginForm.get("password"))?null:o.getError("pattern"))}}function T(n,i){1&n&&(e.TgZ(0,"span"),e._UZ(1,"i",17),e.qZA())}function L(n,i){if(1&n&&(e.TgZ(0,"p",18),e._uU(1),e.qZA()),2&n){const l=e.oxw();e.xp6(1),e.hij(" ",l.errMsg," ")}}let x=(()=>{var n;class i{constructor(t,o,s){this._AuthService=t,this._Router=o,this._FormBuilder=s,this.errMsg="",this.isLoading=!1,this.loginForm=this._FormBuilder.group({email:["",[r.kI.required,r.kI.email]],password:["",[r.kI.required,r.kI.pattern(/^[a-zA-Z0-9_@]{6,}$/)]]})}handleForm(){const t=this.loginForm.value;this.isLoading=!0,!0===this.loginForm.valid&&this._AuthService.login(t).subscribe({next:o=>{"success"==o.message&&(localStorage.setItem("etoken",o.token),this._AuthService.decodeUser(),this.isLoading=!1,this._Router.navigate(["/home"]))},error:o=>{this.errMsg=o.error.message,this.isLoading=!1}})}}return(n=i).\u0275fac=function(t){return new(t||n)(e.Y36(u.e),e.Y36(p.F0),e.Y36(r.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],standalone:!0,features:[e.jDz],decls:21,vars:6,consts:[[1,"w-75","mx-auto","shadow","rounded","p-4","my-3","bg-main-light"],[1,"my-3"],[3,"formGroup","ngSubmit"],[1,"form-item"],["for","email"],["formControlName","email","type","email","id","email",1,"form-control"],["class","alert alert-danger p-1 small w-50 mx-auto",4,"ngIf"],["for","password"],["formControlName","password","type","password","id","password",1,"form-control"],[1,"d-flex","justify-content-between","align-items-center"],[1,"main-btn","mt-2",3,"disabled"],[4,"ngIf"],["routerLink","/forgot",1,"link-primary"],["class","alert alert-danger p-1 w-50 mx-auto mb-0 text-center",4,"ngIf"],[1,"alert","alert-danger","p-1","small","w-50","mx-auto"],["class","mb-0",4,"ngIf"],[1,"mb-0"],[1,"fas","fa-spin","fa-spinner"],[1,"alert","alert-danger","p-1","w-50","mx-auto","mb-0","text-center"]],template:function(t,o){if(1&t&&(e.TgZ(0,"section",0)(1,"h1",1),e._uU(2,"Login Now"),e.qZA(),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return o.handleForm()}),e.TgZ(4,"div",3)(5,"label",4),e._uU(6,"email"),e.qZA(),e._UZ(7,"input",5),e.YNc(8,f,3,2,"div",6),e.qZA(),e.TgZ(9,"div",3)(10,"label",7),e._uU(11,"password"),e.qZA(),e._UZ(12,"input",8),e.YNc(13,v,3,2,"div",6),e.qZA(),e.TgZ(14,"div",9)(15,"button",10),e._uU(16," Login "),e.YNc(17,T,2,0,"span",11),e.qZA(),e.TgZ(18,"a",12),e._uU(19,"Forgot Password"),e.qZA()()(),e.YNc(20,L,2,1,"p",13),e.qZA()),2&t){let s,m;e.xp6(3),e.Q6J("formGroup",o.loginForm),e.xp6(5),e.Q6J("ngIf",(null==(s=o.loginForm.get("email"))?null:s.errors)&&(null==(s=o.loginForm.get("email"))?null:s.touched)),e.xp6(5),e.Q6J("ngIf",(null==(m=o.loginForm.get("password"))?null:m.errors)&&(null==(m=o.loginForm.get("password"))?null:m.touched)),e.xp6(2),e.Q6J("disabled",o.loginForm.invalid),e.xp6(2),e.Q6J("ngIf",o.isLoading),e.xp6(3),e.Q6J("ngIf",o.errMsg)}},dependencies:[_.ez,_.O5,r.UX,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,p.rH]}),i})()}}]);