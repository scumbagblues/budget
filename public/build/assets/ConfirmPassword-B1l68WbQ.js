import{m as d,j as s,L as p}from"./app-Be7-NWdQ.js";import{I as l}from"./InputError-Dyti9N6z.js";import{I as c}from"./InputLabel-VkripjOg.js";import{P as u}from"./PrimaryButton-BSLsR4H7.js";import{T as f}from"./TextInput-C63mYc08.js";import{G as x}from"./GuestLayout-CNA7m7Ea.js";import"./CreditCardIcon-BsOGwyoh.js";function N(){const{data:a,setData:e,post:o,processing:t,errors:m,reset:i}=d({password:""}),n=r=>{r.preventDefault(),o(route("password.confirm"),{onFinish:()=>i("password")})};return s.jsxs(x,{children:[s.jsx(p,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(c,{htmlFor:"password",value:"Password"}),s.jsx(f,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>e("password",r.target.value)}),s.jsx(l,{message:m.password,className:"mt-2"})]}),s.jsx("div",{className:"mt-4 flex items-center justify-end",children:s.jsx(u,{className:"ms-4",disabled:t,children:"Confirm"})})]})]})}export{N as default};
