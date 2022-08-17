"use strict";(self.webpackChunkpractica_docs=self.webpackChunkpractica_docs||[]).push([[9713],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(a),u=n,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:3},i="Coding with Practica",s={unversionedId:"the-basics/coding-with-practica",id:"the-basics/coding-with-practica",title:"Coding with Practica",description:"Now that you have Practice installed (if not, do this first), it's time to code great app using it and understand its unique power. You might also get some ideas for good patterns and practices. All the concepts in this guide do not belong to Practica - they are all standard patterns or libraries that we just put together. That is to say, the content below is not directly about Practica.js rather a group of standard patterns and libraries that we just put together",source:"@site/docs/the-basics/coding-with-practica.md",sourceDirName:"the-basics",slug:"/the-basics/coding-with-practica",permalink:"/the-basics/coding-with-practica",editUrl:"https://github.com/practicajs/practica/tree/main/docs/docs/the-basics/coding-with-practica.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting started quickly",permalink:"/the-basics/getting-started-quickly"},next:{title:"README",permalink:"/decisions/"}},l={},d=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"What&#39;s inside that box?",id:"whats-inside-that-box",level:2},{value:"Running and testing the solution",id:"running-and-testing-the-solution",level:2},{value:"The 3 layers of a component",id:"the-3-layers-of-a-component",level:2},{value:"Let&#39;s code a flow from API to DB and in return",id:"lets-code-a-flow-from-api-to-db-and-in-return",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"coding-with-practica"},"Coding with Practica"),(0,n.kt)("p",null,"Now that you have Practice installed (if not, do this first), it's time to code great app using it and understand its unique power. You might also get some ideas for good patterns and practices. All the concepts in this guide do not belong to Practica - they are all standard patterns or libraries that we just put together. That is to say, the content below is not directly about Practica.js rather a group of standard patterns and libraries that we just put together"),(0,n.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,n.kt)("p",null,"Just before you start coding, ensure you have ",(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm#installing-and-updating"},"nvm")," (a utility that installs Node.js) installed. Both are common development tooling that are considered as a 'best practice'"),(0,n.kt)("h2",{id:"whats-inside-that-box"},"What's inside that box?"),(0,n.kt)("p",null,"You now have a folder with Practica code inside. What exactly can you find there? An example Node.js solution with a single component (API, Microservice) that is called 'order-service'. Of course you'll change its name to something that represents your solution. It packs inside a lot of thoughtful and standard optimizations that will save you countless hours doing what others have done before"),(0,n.kt)("p",null,"Besides this component, there are also a bunch of reusable libraries like logger, error-handler and more. All sit together under a single root folder in a single Git repository - this popular structure is called a 'Monorepo'"),(0,n.kt)("p",null,"The code inside is coded with Node.js, TypeScript, express and Postgresql. Later version of Node.js will support more frameworks"),(0,n.kt)("h2",{id:"running-and-testing-the-solution"},"Running and testing the solution"),(0,n.kt)("p",null,"A minute before we start coding, let's ensure the solution starts and the tests pass. This will give us confidence to add more and more code knowing that we have a valid checkpoint (and tests to watch our back)"),(0,n.kt)("p",null,"Just run the following standard commands:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"CD into the solution folder")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd {your-solution-folder}\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Install the right Node.js version")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"nvm use\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Install dependencies")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Run the tests")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm test\n")),(0,n.kt)("p",null,"Tests pass? Great! \ud83e\udd73\u2705  "),(0,n.kt)("p",null,"They fail? oppss. Please approach our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.com/invite/SrM68BJPqR"},"discord")," or open an issue in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/practicajs/practica/issues"},"Github"),"? We will try to assist shortly"),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Optional: Start the app and check with Postman")),(0,n.kt)("p",null,"Some rely on testing only, others like also to invoke routes using POSTMAN and test manually. We're good with both approach and recommend down the road to rely more and more on testing. Practica includes testing templates that are easy to write"),(0,n.kt)("p",null,"Start the process first by navigating to the example component (order-service):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd services/order-service\n")),(0,n.kt)("p",null,"Then start the app:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,n.kt)("p",null,"Now visit our online POSTMAN collection, explore the routes, invoke and make yourself familiar with the app"),(0,n.kt)("p",null,"We have the ground ready \ud83d\udc25. Let's code now, just remember to run the tests (or POSTMAN) once in a while to ensure nothing breaks"),(0,n.kt)("h2",{id:"the-3-layers-of-a-component"},"The 3 layers of a component"),(0,n.kt)("p",null,"A typical component (e.g., Microservice) contains 3 main layers. This is a known and powerful pattern that is called ",(0,n.kt)("a",{parentName:"p",href:"https://www.techopedia.com/definition/24649/three-tier-architecture"},'"3-Tiers"'),". It's an architectural structure that strikes a great balance between simplicity and robustness. The three layers represent the physical flow of a request with no abstractions:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"- Layer 1: Entry points -")," This is the door to the application where flows start and requests come-in. Our example component has a REST API (i.e., API controllers), this is one kind of an entry-point. There might be other entry-points like a scheduled job, CLI, message queue and more. Whatever entry-point you're dealing with, the responsibility of this layer is minimal - receive requests, perform authentication, pass the request to be handled by the internal code and handle errors. For example, a controller gets API request and does nothing than authenticate the users, extract the payload and call a domain layer function \ud83d\udc47"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"- Domain -")," A folder containing the heart of the app where the flows, logic and data-structure are defined. Its functions can serve any type of entry-points - whether it's being called from API or message queue, the domain layer is agnostic to the source of the caller. Code here may call other services via HTTP/queue. It's likely also to fetch from and save information in a DB, for this it will call the data-access layer \ud83d\udc47"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"- Data-access -")," Your entire DB interaction functionality and configuration is kept in this folder. For now, Practica.js uses ORM to interact with the DB - we're still debating this decision"),(0,n.kt)("p",null,"Now that you understand the structure of the example component, it's much easier to code over it"),(0,n.kt)("h2",{id:"lets-code-a-flow-from-api-to-db-and-in-return"},"Let's code a flow from API to DB and in return"),(0,n.kt)("p",null,"We're about to implement a simple feature to make you familiar with the major code areas. After reading/coding this section, you should be able to add routes, logic and DB objects to your system easily. The example app deals with imaginary e-commerce app and has functionality for adding and querying for Orders. Goes without words that you'll change this to the columns and entities that represent your app"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\ud83d\udddd Key insight:")," Practica has no hidden abstractions, you have to become familiar with the (popular) chosen libraries, the code and modify it to your needs. This minimizes future scenarios where you get stuck when an abstraction is not suitable to your need or you don't understand how things work")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Requirements -")," - Our missions is to code the following: Allow updating an order through the API. Orders should have now a new field: Status. If the existing order field 'paymentTermsInDays' is 0 (i.e., the payment due date is now) or the status is 'delivered' - no changes are allowed and the code should return HTTP status 400 (bad request)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. Change the example component/service name")),(0,n.kt)("p",null,"Obviously your solution, has a different context and name. You probably want to rename the example service name from 'order-service' to {your-component-name}. Change both the folder name ('order-service') and the package.json name field:"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"./services/order-service/package.json")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "name": "your-name-here",\n  "version": "0.0.2",\n  "description": "An example Node.js app that is packed with best practices",\n}\n\n')),(0,n.kt)("p",null,"If you're just experimenting with Practica, you may leave the name as-is for now"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. Add a new 'Edit' route")),(0,n.kt)("p",null,"The express API routes are located in the entry-points layer in a file 'routes.ts': ",(0,n.kt)("em",{parentName:"p"},"[root]","/services/order-service/entry-points/api/routes.ts")),(0,n.kt)("p",null,"This is a very typical express code, if you're familiar with express you'll be productive right away. This is a core principle of Practica - it uses battle tested technologies as-is. Let's just add a new route in this file:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// A new route to edit order\nrouter.put('/:id', async (req, res, next) => {\n    try {\n      logger.info(`Order API was called to edit order ${req.params.id}`);\n      // Later on we will call the main code in the domain layer\n      // Fow now let's put hard coded values\n      res.json({id:1, userId: 1, productId: 2,\n      deliveryAddress: '123 Main St, New York',\n      paymentTermsInDays: 30}).status(200).end();\n    } catch (err) {\n      next(err);\n    }\n  });\n")),(0,n.kt)("p",null,"Looks highly familiar, right? If not, it means you should learn first how to code first with your preferred framework - in this case it's Express. That's the thing with Practica - We don't replace neither abstract your reputable framework, we only augment it"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3. Test your first route")),(0,n.kt)("p",null,"Like always, once we have a first code skeleton, it's time to start testing it. In Practica we recommend writing 'component tests' against the API and including all the layers (no mocking), we have great examples for this under ","[root]","/services/order-service/test"),(0,n.kt)("p",null,"You may visit the file: ","[root]","/services/order-service/test/add-order.test.ts, read one of the test and you're likely to get the intent shortly. The testing guide will be released shortly"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\ud83d\udddd Key insight:")," Practica's testing strategy is based on 'component tests' that include all the layers including the DB using docker-compose. We include rich testing patterns that mitigate various real-world risks like testing error handling, integrations and other things beyond the basics. Thanks to thoughtful setup, we're able to run 50 tests with DB in ~6 seconds. This is considered as a modern and highly-efficient strategy for testing Microservices")),(0,n.kt)("p",null,"In this guide though, we're more focused on features craft - it's OK for now to test with POSTMAN or any other API explorer tooling"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4. Create a DTO and a validation function")),(0,n.kt)("p",null,"We're about to receive a payload from the caller, the edited order JSON. We obviously want to declare a strong schema/type so we can validate the incoming payloads and work with strong TypeScript types"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u2705Best practice:")," Validate incoming request and fail early. Both in run-time and development time")),(0,n.kt)("p",null,"To meet these goals, we use two popular and powerful libraries: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sinclairzx81/typebox"},"typebox")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ajv-validator/ajv"},"ajv"),". The first library, Typebox, defines the schema in the standard JSONSchema format, the second validates it."),(0,n.kt)("p",null,"Open the file ","[root]","/services/order-service/domain/order-schema.ts"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// Declare the basic order schema\nimport { Static, Type } from '@sinclair/typebox';\nexport const orderSchema = Type.Object({\n  deliveryAddress: Type.String(),\n  paymentTermsInDays: Type.Number(),\n  productId: Type.Integer(),\n  userId: Type.Integer(),\n  status: Type.Optional(Type.String()), // \ud83d\udc48 Add this field\n});\n")),(0,n.kt)("p",null,"This is Typebox's syntax for defines the basic order schema. Based on this we can get both JSONSchema and TypeScript type (!), this allows both run-time and development time protection. Add the status field to it and the following line to get a TypeScript type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// This is a standard TypeScript type - we can use it now in the code and get intellisense + Typescript validation\nexport type editOrderDTO = Static<typeof orderSchema>;\n")),(0,n.kt)("p",null,"We have now strong development types to work with, it's time to configure our runtime validator. The library ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ajv-validator/ajv"},"ajv")," gets JSON Schema, a standard format that can be reused in many other places (e.g., to define OpenAPI spec) and validates the payload against it."),(0,n.kt)("p",null,"In the same file, let's define a validation function for edited orders:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// [root]/services/order-service/domain/order-schema\nimport { ajv } from '@practica/validation';\nexport function editOrderValidator() {\n  // For performance reason we cache the compiled validator function\n  const validator = ajv.getSchema<editOrderDTO>('edit-order');\n  if (!validator) {\n    ajv.addSchema(editOrderSchema, 'edit-order');\n  }\n\n  return ajv.getSchema<editOrderDTO>('edit-order')!;\n}\n")),(0,n.kt)("p",null,"We now have a TypeScript type and a function that can validate it on run-time. Knowing that we have safe types, it's time for the 'main thing' - coding the flow and logic"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"5. Create a use case (what the heck is 'use case'?)")),(0,n.kt)("p",null,"Let's code our logic, but where? Obviously not in the controller/route which merely forwards request to our business logic layer. Inside our domain folder, where the logic lives, we will create a special type of code object - a use case."),(0,n.kt)("p",null,"A use-case is a plain JavaScript object which is created for every flow/feature. It summarizes the flow in a business and simple language without delving into the technical and small details. It mostly orchestrates other small services that hold all the implementation details. With use cases, the reader can grasp the high-level flow easily and avoid unnecessary complexity."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u2705Best practice:")," Describe every feature/flow with a 'use case' object that summarizes the flow for better readability")),(0,n.kt)("p",null,"Let's add inside the domain layer a new file: edit-order-use-case.ts and code the requirements:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"// [root]/services/order-service/domain/edit-order-use-case.ts\nimport { AppError } from '@practica/error-handling';\nimport * as orderRepository from '../data-access/repositories/order-repository';\nimport { editOrderDTO, orderSchema, editOrderValidator } from './order-schema';\n\nexport default async function editOrder(orderId: number, updatedOrder: editOrderDTO) {\n  // Note how we use the editOrderDTO that was defined in the previous step\n  const isValid = editOrderValidator(updatedOrder);\n  if (isValid === false) {\n    throw new AppError('invalid-order', `Validation failed`, 400, true);\n  }\n  if (updatedOrder.status === 'delivered' || updatedOrder.paymentTermsInDays === 0) {\n    throw new AppError(\n      'changes-not-allowed',\n      `It's not allow to delivered or paid orders`,\n      409,\n      true\n    );\n  }\n\n  // Call the DB here \ud83d\udc47 - to be explained soon\n  return await orderRepository.editOrder(orderId, updatedOrder);\n}\n")),(0,n.kt)("p",null,"This is of course a simplistic flow. We can represent it easily using one class. Consider a real-world scenario with heavy logic, calls to 3rd parties and heavy DB work - In this case you'll need to spread this code across multiple services. This is where the use case idea will shine - by summarizing long details."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"6. Put the data access code")),(0,n.kt)("p",null,"We're tasked with saving the edited order in the database. Any DB-related code is located within the folder: ","[root]","/services/order-service/data-access."),(0,n.kt)("p",null,"The database code is implemented with the popular ORM, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sequelize/sequelize"},"Sequelize"),". We have plans to evaluate other ORMs like Prisma. In any case, the current choice, Sequelize, is a battle-tested and reputable option that will surely serve you well as long the DB complexity is overwhelming."),(0,n.kt)("p",null,"Before discussing the ORM-side, we wrap the entire DB layer with a simple class that externalize all the DB functions to the domain layer. This is the ",(0,n.kt)("a",{parentName:"p",href:"https://martinfowler.com/eaaCatalog/repository.html"},"repository pattern")," which advocates decoupling the DB narratives from the one who codes business logic. Inside ","[root]","/services/order-service/data-access/repositories, you'll find a file 'order-repository', open it and add a new function:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"[root]/services/order-service/data-access/repositories/order-repository.js\nimport getOrderModel from './order-model';// \ud83d\udc48 This is the ORM code which will get explained soon \n\nexport async function editOrder(orderId: number, orderDetails) {\n  const orderEditingResponse = await getOrderModel().update(orderDetails, {\n    where: { id: orderId },\n  });\n\n  return orderEditingResponse;\n}\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\u2705Best practice:")," Externalize any DB data with a response that contains plain JavaScript objects (the repository pattern)")),(0,n.kt)("p",null,"Let's configure the ORM now and define the Order model - a mapper between JavaScript object and a database table (a common ORM notion). Open the file ","[root]","/services/order-service/data-access/repositories/order-model.ts:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import { DataTypes } from 'sequelize';\nimport getDbConnection from '../db-connection';\n\nexport default function getOrderModel() {\n  // getDbConnection returns a singleton Sequelize (ORM) object\n  return getDbConnection().define('Order', {\n    id: {\n      type: DataTypes.INTEGER,\n      primaryKey: true,\n      autoIncrement: true,\n    },\n    deliveryAddress: {\n      type: DataTypes.STRING,\n    },\n    //some other fields here\n    status: {\n      type: DataTypes.String,// \ud83d\udc48 Add this field per our requirements\n      allowNull: true\n    }\n  });\n}\n\n")),(0,n.kt)("p",null,"This file defines the mapping between our received and returned JavaScript object and the database. Given this definition, the ORM can now expose functions to interact with data"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"7. \ud83e\udd73 You have a robust working flow now")),(0,n.kt)("p",null,"You should now be able to run the automated tests or POSTMAN and see the full flow working. It might feel like an overkill to create multiple layers and objects - naturally this level of modularization pays off when things get more complicated in real-world scenarios. Follow these layers and principles to write great code. In a short time, once you become familiar with these techniques - it will feel quick and natural "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"\ud83d\udddd Key insight:")," Anything we went through in this article is not unique to Practica.js rather ubiquitous backend concepts. Practica.js brings no overhead beyond the common best practices. This knowledge will serve you in any other scenario, regardless of Practica.js")),(0,n.kt)("p",null,"We will be grateful if you share with us how to make this guide better"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ideas for future iterations: How to work with the Monorepo commands, Focus on a singel componenent or run commands from the root, DB migration")))}p.isMDXComponent=!0}}]);