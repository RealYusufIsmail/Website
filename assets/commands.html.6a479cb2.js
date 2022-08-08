import{_ as n,o as a,c as s,e}from"./app.c21d7f7f.js";const t={},o=e(`<h1 id="interaction-commands-aka-slash-commands" tabindex="-1"><a class="header-anchor" href="#interaction-commands-aka-slash-commands" aria-hidden="true">#</a> Interaction Commands aka. Slash Commands</h1><div class="custom-container tip"><p class="custom-container-title">INFO</p><p>There are a lot of convenient methods which aim to make your life easier with i.e., not being able to have an invalid configuration of your builder. Therefore, the following examples will only show the usage with the <strong>convenient methods</strong>.</p></div><h2 id="creating-a-command" tabindex="-1"><a class="header-anchor" href="#creating-a-command" aria-hidden="true">#</a> \u{1F4A1} Creating a Command</h2><div class="custom-container tip"><p class="custom-container-title">INFO</p><p>There are 2 different types of Commands:</p><ul><li>Global | Available for every Server once your Bot gets invited: Created with <code>createGlobal(DiscordApi)</code>.</li><li>Server | Only available on the specific Server: Created with <code>createForServer(Server)</code>.</li></ul></div><p>Let&#39;s get started with the most basic command, a <strong>ping</strong> command.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">SlashCommand</span> command <span class="token operator">=</span> <span class="token class-name">SlashCommand</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Checks the functionality of this command&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">createGlobal</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>That&#39;s all you have to do!</p><p>Let&#39;s have a look at a more complex command which involves nearly all possibilities:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">SlashCommand</span> command <span class="token operator">=</span>
        <span class="token class-name">SlashCommand</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token string">&quot;channel&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A command dedicated to channels&quot;</span><span class="token punctuation">,</span>
            <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>
                <span class="token class-name">SlashCommandOption</span><span class="token punctuation">.</span><span class="token function">createWithOptions</span><span class="token punctuation">(</span><span class="token class-name">SlashCommandOptionType</span><span class="token punctuation">.</span>SUB_COMMAND_GROUP<span class="token punctuation">,</span> <span class="token string">&quot;edit&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Edits a channel&quot;</span><span class="token punctuation">,</span>
                    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>
                        <span class="token class-name">SlashCommandOption</span><span class="token punctuation">.</span><span class="token function">createWithOptions</span><span class="token punctuation">(</span><span class="token class-name">SlashCommandOptionType</span><span class="token punctuation">.</span>SUB_COMMAND<span class="token punctuation">,</span> <span class="token string">&quot;allow&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Allows a permission to a user for a channel&quot;</span><span class="token punctuation">,</span>
                            <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>
                                <span class="token class-name">SlashCommandOption</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">SlashCommandOptionType</span><span class="token punctuation">.</span>CHANNEL<span class="token punctuation">,</span> <span class="token string">&quot;channel&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;The channel to modify&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                <span class="token class-name">SlashCommandOption</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">SlashCommandOptionType</span><span class="token punctuation">.</span>USER<span class="token punctuation">,</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;The user which permissions should be changed&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                <span class="token class-name">SlashCommandOption</span><span class="token punctuation">.</span><span class="token function">createWithChoices</span><span class="token punctuation">(</span><span class="token class-name">SlashCommandOptionType</span><span class="token punctuation">.</span>DECIMAL<span class="token punctuation">,</span> <span class="token string">&quot;permission&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;The permission to allow&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
                                    <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>
                                        <span class="token class-name">SlashCommandOptionChoice</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;manage&quot;</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                        <span class="token class-name">SlashCommandOptionChoice</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">&quot;show&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">createGlobal</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let that sink in first!</p><p>What are we doing here?</p><ol><li>We create a base command called <code>channel</code>.</li><li>It has a SUB_COMMAND_GROUP called <code>edit</code> which basically is just a folder where you can put your commands in.</li><li>There&#39;s a SUB_COMMAND called <code>allow</code> which is our actual command. Therefore, our complete argument looks like <code>channel edit allow</code>.</li><li>The SUB_COMMAND has 3 arguments: <ol><li>The channel which should be edited.</li><li>The user which permissions should be changed.</li><li>A predefined list of available permissions the command executor can choose of.</li></ol></li></ol><p><img src="https://i.imgur.com/Qb9lgqb.png" alt=""></p><h3 id="notes-on-creating-commands" tabindex="-1"><a class="header-anchor" href="#notes-on-creating-commands" aria-hidden="true">#</a> \u{1F4D4} Notes on creating commands:</h3><h4 id="the-required-attribute" tabindex="-1"><a class="header-anchor" href="#the-required-attribute" aria-hidden="true">#</a> The <code>REQUIRED</code> attribute</h4><p>You can only mark the <strong>last</strong> argument as being <strong>not required</strong>. This means it can be optionally set by the command executor. In the above example you could i.e. set the <code>PERMISSIONS</code> argument to <code>false</code>.</p><h4 id="command-structure" tabindex="-1"><a class="header-anchor" href="#command-structure" aria-hidden="true">#</a> Command structure</h4><p>Your command has to follow these structures in order to be successfully created:</p><details class="custom-container details"><summary>Command structure</summary><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>VALID

command
|
|__ subcommand
|
|__ subcommand

----

command
|
|__ subcommand-group
    |
    |__ subcommand
|
|__ subcommand-group
    |
    |__ subcommand


-------

INVALID


command
|
|__ subcommand-group
    |
    |__ subcommand-group
|
|__ subcommand-group
    |
    |__ subcommand-group

----

INVALID

command
|
|__ subcommand
    |
    |__ subcommand-group
|
|__ subcommand
    |
    |__ subcommand-group
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="get-your-commands" tabindex="-1"><a class="header-anchor" href="#get-your-commands" aria-hidden="true">#</a> \u2935\uFE0F Get your commands</h2><p>All global commands:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SlashCommand</span><span class="token punctuation">&gt;</span></span> commands <span class="token operator">=</span> api<span class="token punctuation">.</span><span class="token function">getGlobalSlashCommands</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>All commands only available on a single server:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Server</span> server <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SlashCommand</span><span class="token punctuation">&gt;</span></span> commands <span class="token operator">=</span> api<span class="token punctuation">.</span><span class="token function">getServerSlashCommands</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Getting all commands from a server only contains the commands you have created on this specific server. Therefore, the returned list does not include any global command!</p></div><h2 id="updating-commands" tabindex="-1"><a class="header-anchor" href="#updating-commands" aria-hidden="true">#</a> \u{1F528} Updating Commands</h2><p>When updating your commands you only have to include what you actually want to change. The following updater will change the previous created command and change its base name from <code>channel</code> to <code>channels</code>.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">SlashCommand</span> updatedCommand <span class="token operator">=</span>
            <span class="token keyword">new</span> <span class="token class-name">SlashCommandUpdater</span><span class="token punctuation">(</span>commandId<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;channels&quot;</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">updateGlobal</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bulk-overwriting-commands" tabindex="-1"><a class="header-anchor" href="#bulk-overwriting-commands" aria-hidden="true">#</a> \u270D\uFE0F Bulk overwriting commands</h2><p>If you have to update / create multiple commands at once it advised to use the batch updater to only have to do 1 request.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">DiscordApi</span> api <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>

api<span class="token punctuation">.</span><span class="token function">bulkOverwriteGlobalSlashCommands</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span>
    <span class="token keyword">new</span> <span class="token class-name">SlashCommandBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;server&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">&quot;A command for the server&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">SlashCommandBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;permission&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setDescription</span><span class="token punctuation">(</span><span class="token string">&quot;A command for permissions&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="permissions" tabindex="-1"><a class="header-anchor" href="#permissions" aria-hidden="true">#</a> \u{1F46E}\u200D\u2642\uFE0F Permissions</h2><p>Permissions exist to enable / disable the usage of your commands for certain things. These things may be:</p><ul><li>Permissions</li><li>DMs</li></ul><p>When you create a command you can specify which permissions are required to use it. In addition to the required permissions, you can also specify whether the command should be available in DMs.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">SlashCommand</span><span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span><span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Ping!&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">setDefaultEnabledForPermissions</span><span class="token punctuation">(</span><span class="token class-name">PermissionType</span><span class="token punctuation">.</span>ADMINISTRATOR<span class="token punctuation">,</span> <span class="token class-name">PermissionType</span><span class="token punctuation">.</span>BAN_MEMBERS<span class="token punctuation">)</span>
    <span class="token comment">//.setDefaultDisabled() Effectively the same as setDefaultEnabledForPermissions(PermissionType.ADMINISTRATOR) but this will lead to the default type by Discord.</span>
    <span class="token punctuation">.</span><span class="token function">setEnabledInDms</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">createGlobal</span><span class="token punctuation">(</span>api<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">INFO</p><p>Once your bot has been invited to a server, you can not change the permissions afterwards on this server. Then it&#39;s up to the server administrators / owner to correctly set up the commands for users / roles / channels.</p></div><h2 id="limits" tabindex="-1"><a class="header-anchor" href="#limits" aria-hidden="true">#</a> \u2757 Limits</h2><h3 id="registering-a-command" tabindex="-1"><a class="header-anchor" href="#registering-a-command" aria-hidden="true">#</a> Registering a command</h3><ul><li>Server commands are specific to the server you specify when making them. Server commands are not available in DMs. Command names are unique per application within each scope (global and server). That means:</li><li>Your app cannot have two global commands with the same name</li><li>Your app cannot have two server commands within the same name on the same guild</li><li>Your app can have a global and guild command with the same name</li><li>Multiple apps can have commands with the same names</li></ul><h3 id="general" tabindex="-1"><a class="header-anchor" href="#general" aria-hidden="true">#</a> General</h3><ul><li>An app can have up to 100 top-level global commands with unique names</li><li>An app can have up to an additional 100 server commands per server</li><li>An app can have up to 25 subcommand groups on a top-level command</li><li>An app can have up to 25 subcommands within a subcommand group</li><li>Commands can have up to 25 options</li><li>Options can have up to 25 choices</li><li>Maximum of 4000 characters for combined name, description, and value properties for each command and its subcommands and groups</li><li>Limitations on nesting subcommands and groups</li><li>Global rate limit of 200 slash command creates per day per server</li></ul>`,42),i=[o];function c(p,l){return a(),s("div",null,i)}var d=n(t,[["render",c],["__file","commands.html.vue"]]);export{d as default};
