import{_ as s,r as l,o as t,c as r,a,b as o,d as e,e as i}from"./app.c21d7f7f.js";const c={},g=a("h1",{id:"logger-configuration",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#logger-configuration","aria-hidden":"true"},"#"),e(" Logger Configuration")],-1),d=e("Logging is an important tool to keep track of what is going on in your application. Javacord uses the "),p={href:"https://logging.apache.org/log4j/2.x/manual/api.html",target:"_blank",rel:"noopener noreferrer"},u=e("Log4j 2 API"),h=e(", which allows you to use your favorite logging framework to log messages in your own code and have all logging messages end up in the same destination. In case you do not add your own logging framework, a fallback logger is used that logs to the console."),m=a("br",null,null,-1),k=e(" If you want more control, add a proper logging framework that supports your needs and configure it accordingly. You can for example configure log messages on a per-class level, change log levels during runtime, or log to a file or database."),f=i(`<h2 id="fallback-logger" tabindex="-1"><a class="header-anchor" href="#fallback-logger" aria-hidden="true">#</a> \u{1F948} Fallback Logger</h2><p>Javacord&#39;s fallback logger is a simple Log4j logger which always logs <code>INFO</code> level and higher. It allows you to enable <code>DEBUG</code> and <code>TRACE</code> logging manually. As log levels are hierarchical, enabling <code>TRACE</code> will also implicitly enable <code>DEBUG</code>, and disabling <code>DEBUG</code> will also implicitly disable <code>TRACE</code>.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// Enable debug logging</span>
<span class="token class-name">FallbackLoggerConfiguration</span><span class="token punctuation">.</span><span class="token function">setDebug</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Enable trace logging</span>
<span class="token class-name">FallbackLoggerConfiguration</span><span class="token punctuation">.</span><span class="token function">setTrace</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Changing the log level of the fallback logger only affects newly created loggers. Pre-existing loggers will not have their log level changed. So if you want to configure the fallback logger, you should do this as one of the first actions in your bot code. If you want to change log levels during runtime, you should use a proper logging framework like Log4j 2 Core or another library that supports this.</p><p>All fallback logger messages are printed to the standard output stream (<code>System.out</code>) and thus usually to your console. If you want to log to a file, database, or anything else, you should consider using a proper logging framework which allows you to configure this behavior.</p><p>This is how a log line from the fallback logger will look like:</p><div class="language-log ext-log line-numbers-mode"><pre class="language-log"><code><span class="token operator">&lt;</span>time with date            <span class="token operator">&gt;</span><span class="token operator">&lt;</span>level<span class="token operator">&gt;</span><span class="token operator">&lt;</span>logger name<span class="token punctuation">,</span> usually the logging class              <span class="token operator">&gt;</span> <span class="token operator">&lt;</span>message            <span class="token operator">&gt;</span> <span class="token operator">&lt;</span>the thread context<span class="token punctuation">,</span> here the shard number<span class="token operator">&gt;</span>
<span class="token date number">2018-08-03</span> <span class="token time number">20:00:06.080+0200</span> <span class="token level debug keyword">DEBUG</span> org<span class="token punctuation">.</span>javacord<span class="token punctuation">.</span>core<span class="token punctuation">.</span>util<span class="token punctuation">.</span>gateway<span class="token punctuation">.</span>DiscordWebSocketAdapter Received HELLO packet <span class="token operator">{</span>shard<span class="token operator">=</span><span class="token number">0</span><span class="token operator">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="using-a-proper-logging-framework" tabindex="-1"><a class="header-anchor" href="#using-a-proper-logging-framework" aria-hidden="true">#</a> \u{1F947} Using a Proper Logging Framework</h2><h3 id="adding-a-logging-framework" tabindex="-1"><a class="header-anchor" href="#adding-a-logging-framework" aria-hidden="true">#</a> Adding a Logging Framework</h3><p>Adding a logging framework of your choice is very straightforward. You can just add it as a dependency, and it will be detected by Log4j automatically. The following example adds Log4j 2 using Gradle:</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>dependencies <span class="token punctuation">{</span> runtimeOnly <span class="token string">&#39;org.apache.logging.log4j:log4j-core:2.17.0&#39;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can also use an SLF4J compatible logging framework using <code>log4j-to-slf4j</code>. The following example adds Logback Classic using Gradle:</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>dependencies <span class="token punctuation">{</span>
    runtimeOnly <span class="token string">&#39;org.apache.logging.log4j:log4j-to-slf4j:2.17.0&#39;</span>
    runtimeOnly <span class="token string">&#39;ch.qos.logback:logback-classic:1.2.3&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="configure-your-logging-framework" tabindex="-1"><a class="header-anchor" href="#configure-your-logging-framework" aria-hidden="true">#</a> Configure Your Logging Framework</h3>`,14),b=a("strong",null,"Log4j 2",-1),v=e(": "),y={href:"https://logging.apache.org/log4j/2.x/manual/configuration.html",target:"_blank",rel:"noopener noreferrer"},_=e("Log4j configuration"),w=a("strong",null,"Logback Classic",-1),L=e(": "),x={href:"https://logback.qos.ch/manual/configuration.html",target:"_blank",rel:"noopener noreferrer"},j=e("Logback configuration"),C=a("h3",{id:"logging-the-relevant-shard",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#logging-the-relevant-shard","aria-hidden":"true"},"#"),e(" Logging the Relevant Shard")],-1),E=a("p",null,[e("Javacord adds the relevant shard to each log message. The facility that stores this information has a different name depending on which logging framework you use. For Log4j 2, this is called Thread Context Map and can be added in a pattern layout with "),a("code",null,"%X{shard}"),e(", or you can add the whole thread context map by using "),a("code",null,"%X"),e(". For Logback Classic, it is called MDC and can be added with the same pattern expressions as for Log4j.")],-1);function F(T,A){const n=l("ExternalLinkIcon");return t(),r("div",null,[g,a("p",null,[d,a("a",p,[u,o(n)]),h,m,k]),f,a("ul",null,[a("li",null,[b,v,a("a",y,[_,o(n)])]),a("li",null,[w,L,a("a",x,[j,o(n)])])]),C,E])}var B=s(c,[["render",F],["__file","logger-config.html.vue"]]);export{B as default};
