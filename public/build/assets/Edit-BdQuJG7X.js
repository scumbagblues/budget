import{m as x,r as p,j as e}from"./app-CNENIw2j.js";import{A as h}from"./AuthenticatedLayout-CZsxM5j6.js";import{P as g}from"./PrimaryButton-bwdu5GaK.js";import{T as m}from"./TextInput-yFlPuc0G.js";import{I as d}from"./InputError-k1EvUxdF.js";import"./ApplicationLogo-D3k_t61o.js";import"./transition-DVO7mXlt.js";function E({expense:s,budgets:n}){const{data:a,setData:r,post:o,processing:l,errors:i,reset:u}=x({amount:s.amount||"",budget_id:s.budget_id||"",description:s.description||""});p.useEffect(()=>()=>{u("amount","description","budget_id")},[]);const c=t=>{t.preventDefault(),o(route("expenses.update",s.id))};return e.jsx(h,{header:e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200",children:"Edit Expense"}),children:e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800",children:e.jsx("div",{className:"p-6 text-gray-900 dark:text-gray-100",children:e.jsxs("form",{onSubmit:c,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(m,{id:"amount",name:"amount",type:"number",placeholder:"Amount",value:a.amount,className:"input input-bordered w-full max-w-xs",autoComplete:"amount",isFocused:!0,onChange:t=>r("amount",t.target.value),required:!0}),e.jsx(d,{message:i.amount,className:"mt-2"})]}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("select",{name:"budget_id",value:a.budget_id,onChange:t=>r("budget_id",t.target.value),className:"select select-bordered w-full max-w-xs",required:!0,children:[e.jsx("option",{value:"",children:"Select a budget"}),n.map(t=>e.jsx("option",{value:t.id,children:t.name},t.id))]}),e.jsx(d,{message:i.budget_id,className:"mt-2"})]}),e.jsx("div",{className:"flex items-center mb-4",children:e.jsxs("div",{className:"flex-2",children:[e.jsx(m,{id:"description",name:"description",placeholder:"Description",value:a.description,className:"input input-bordered w-full max-w-xs",autoComplete:"description",onChange:t=>r("description",t.target.value),required:!0}),e.jsx(d,{message:i.description,className:"mt-2"})]})}),e.jsx("div",{className:"mt-4 flex items-center justify-end",children:e.jsx(g,{disabled:l,children:"Update Expense"})})]})})})})})})}export{E as default};
