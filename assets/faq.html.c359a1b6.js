import{_ as r,r as a,o as l,c as d,a as e,b as n,w as c,e as o,d as t}from"./app.c21d7f7f.js";const h={},u=o('<h1 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions" aria-hidden="true">#</a> Frequently Asked Questions</h1><p>Here you will find answers to some of the most asked questions.</p><h2 id="q-what-is-in-the-code-examples" tabindex="-1"><a class="header-anchor" href="#q-what-is-in-the-code-examples" aria-hidden="true">#</a> Q: What is <code>...</code> in the code examples?</h2><p>You have to replace the <code>...</code> with an instance that can be assigned to the datatype seen left.</p><p>For example, if you see <code>TextChannel channel = ...</code>, you have to replace <code>...</code> with an instance that is a TextChannel which you can get from the API <code>api.getTextChannelById(CHANNEL_ID)</code> (note this returns an <a href="../essential-knowledge/optionals">Optional</a>&lt;TextChannel&gt;) or from an event like <code>messageCreateEvent.getChannel()</code>.</p><h2 id="q-why-is-my-code-not-working" tabindex="-1"><a class="header-anchor" href="#q-why-is-my-code-not-working" aria-hidden="true">#</a> Q: Why is my code not working?</h2><p>There are multiple reasons why your code might not work. The most common ones are:</p>',7),p=e("li",null,"Your code is not being reached. So make sure your code actually gets executed with a print statement or a debugger.",-1),g=t("Add at least "),f=e("code",null,".exceptionally(ExceptionLogger.get())",-1),m=t(" to every "),_=e("a",{href:"../essential-knowledge/completable-futures"},"CompletableFuture",-1),y=t(" (like when sending a message) to show any exceptions that might come from Discord."),k=o('<li>Methods like <code>User#getRoles(Server)</code> do not return the roles of the user. To fix this make sure to add the <code>GUILD_MEMBERS</code> <a href="../basic-tutorials/gateway-intents">intent</a>.</li><li>You are getting a <code>NoSuchElementException</code>. Congratulations, you have killed a kitten! You are most likely getting this Exception because you handle <a href="../essential-knowledge/optionals">Optionals</a> wrong. Read the article on <a href="../essential-knowledge/optionals">Optionals</a> to learn how to use them correctly.</li>',2),w=t("If none of these tips will help you, you can ask your question in our "),x={href:"https://discord.gg/javacord",target:"_blank",rel:"noopener noreferrer"},v=t("Discord Server"),q=t("."),b=o(`<h3 id="how-to-properly-ask-a-question-to-get-fast-support" tabindex="-1"><a class="header-anchor" href="#how-to-properly-ask-a-question-to-get-fast-support" aria-hidden="true">#</a> How to properly ask a question to get fast support?</h3><p>Don&#39;t ask:</p><div class="language-text ext-text"><pre class="language-text"><code>Why is my code not working?
//Code
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>Why am I getting Exception X?
</code></pre></div><p>To ensure all information is provided that is needed to solve your issue, you should ask your question in a format like:</p><div class="language-text ext-text"><pre class="language-text"><code>I have an issue with:   YOUR_ISSUE
I want to do:           WHAT_YOU_WANT_TO_DO
Currently this happens: WHAT_HAPPENS_NOW

//Code

//Exception
The exception is thrown in the following line(not the number): CODE_LINE
</code></pre></div><h2 id="q-what-differs-javacord-from-jda-and-d4j" tabindex="-1"><a class="header-anchor" href="#q-what-differs-javacord-from-jda-and-d4j" aria-hidden="true">#</a> Q: What differs Javacord from JDA and D4J?</h2><p>While all 3 libraries are Wrappers for the programming language Java, they use different techniques and concepts for their API.</p><ul><li><strong>Javacord</strong>: Uses Java classes for its API like <a href="../essential-knowledge/completable-futures">CompletableFuture</a> for async requests and <a href="../essential-knowledge/optionals">Optional</a> for return types which may be <code>null</code>. <ul><li>Sending a Message: <code>channel.sendMessage(&quot;Javacord&quot;)</code></li><li>Checking if the Author of a message is a user: <code>message.getMessageAuthor().asUser().isPresent()</code></li></ul></li><li><strong>JDA</strong>: Has its own wrapper to execute requests and returns <code>null</code> if values are not present. <ul><li>Sending a Message: <code>channel.sendMessage(&quot;JDA&quot;).queue()</code></li><li>Checking if the Author of a message is a user: <code>message.getMember() != null</code></li></ul></li><li><strong>Discord4J</strong>: Takes on the <code>reactive</code> approach. <ul><li>Sending a Message: <code>channel.createMessage(&quot;Pong!&quot;).block();</code></li></ul></li></ul>`,9);function C(E,A){const s=a("RouterLink"),i=a("ExternalLinkIcon");return l(),d("div",null,[u,e("ol",null,[p,e("li",null,[g,n(s,{to:"/wiki/essential-knowledge/completable-futures.html#exceptionally"},{default:c(()=>[f]),_:1}),m,_,y]),k]),e("p",null,[w,e("a",x,[v,n(i)]),q]),b])}var I=r(h,[["render",C],["__file","faq.html.vue"]]);export{I as default};
