---
title: "Vim is a Waste of Time and I love it"
pubDate: 2023-11-14
description: "My story with Vim the Editor."
readingTime: 6
---

I'll be talking about my adventure with Neovim and I'd like to convince you to do something throughout this article (more about it later). This is a story about me and this little text editor called Neovim. So sit back, get comfy and enjoy the ride.

## The Beginnings

When I was younger (2 years ago) while attending a CS course I've been using V\*Code for the majority of my classes. Life was simple I was happy.

In my third semester, YouTube decided to recommend this video series from this up-and-coming Twitch sparkling personality called The Primegean where he went through how to start with Vim. Unfortunately, it's been deleted since he [remade the entire thing](https://www.youtube.com/watch?v=X6AR2RMB5tE&list=PLm323Lc7iSW_wuxqmKx_xxNtJC_hJbQ7R), I recommend you watch it since it's entertaining and informative. It piqued my interest since I've heard on Reddit that this editor is something worth looking into. So I went through the entire thing.

He walks you through the basics of Vim the editor. How to move in it, how to quit it(!), what are the quirks of it and why you might want to learn it. I was hooked. Before I had only used Vi in my operating systems classes in technician school where we edited config files in it. I forgot about it since then.

My eyes were opened. I was ecstatic. Excitement flowed through my brain. I watched the entire series. Copy-pasted his entire base config. But that was it. He didn't say anything about how to set up code completion, snippets, LSP, and other useful things you'd want. So I started digging. A couple of hours passed, but nothing was working, I was really confused, and I gave up. Since It was also the time of my exams, I pushed it aside to come back to it in the future.

But my struggles were not in vain. With a bitter taste, I installed the Vim extension in V\*Code. Content with it I continued to do programming!

## The Return

A little time passed. Now blazing through my code files. Learned a few useful motions and V\*Code key binds. I was happy. But then came a problem. V\*Code started to lag on me. I've been using an M1 13" MacBook Pro with 8GB of RAM so I was pretty displeased by this fact. The straw that broke the camel's back was a bug in V\*Code that made Code Extension Helper on M1 Macs crash. It was so bad that it'd crash on me multiple times a day.

During this time it'd just restart but in the meantime, code highlights, snippets, and LSP were gone. So I was forced to take these couple-second breaks during my work which was irritating since it was kicking me out of my flow. I decided that now is the time.

## All-in into (Neo)vim

Now with a strong motivation and a real goal in mind, I started once again. This time with the acquired skills and knowledge about those so-called Vim distributions. To my surprise, like with Linux, there are Vim distributions that provide you with the base configuration to get you started. To name a few:

- [LazyVim](https://www.lazyvim.org/)
- [AstroVim](https://astronvim.com/)
- [LunarVim](https://www.lunarvim.org/)
- [NvChad](https://nvchad.com/)

and more basic ones like [nvim-config](https://github.com/jdhao/nvim-config). Just because of the name I picked _NvChad_. Since _NvChad_ is a distro it is doing some things differently, you have to read the docs to know how to modify it, add plugins, LSPs, and so on. Of course, I didn't know what I was doing at the start. Little by little I learned about the parts that make a code editor:

- "What is even an LSP?"
- "How does it work?"
- "How does it even tell Vim about what is happening in the code?"

> Those answers came to me through research and maybe I'll write an article about it in the future.

Now that I had everything up and running there was nothing left but use it, and I used it a lot. To get the records straight I'm not using Vim exclusively. I couldn't for the Love of God get the Java language server running and I need it for my university course. At this point, I think it's impossible to get it working but I'm going to blame it on skill issues. I have IntelliJ just for Java development.

## What is an IDE?

_"Integrated Development Environment"_, what it is? Some people don't seem to know. Like they don't want to use Vim because only IDEs have things like:

- terminal emulators
- tabs
- file explorer
- LSPs
- Search

to inform everyone, Vim has every single thing. Some things are supported out of the box, some by plugins, and some are even better than what you can find in other editors. For example, I cannot go back to any other editor because they lack [telescope](https://github.com/nvim-telescope/telescope.nvim). _Telescope_ is a Neovim plugin that uses [fzf](https://github.com/junegunn/fzf) for search. _Fzf_ is a terminal utility that allows for fuzzy search in your file system. _Telescope_ takes it, wraps it into a cool-looking UI, and plugs it into Vim. Since _Fzf_ is written in Go, it's really fast. It has file searching, live grep and many other features. It makes searching for things in your codebase a breeze. Other editors have searched but it's not as fast or as convenient to use. For me, it's just `<leader>ff` or `<leader>fw` in normal mode away!

Another notable thing Neovim is damn fast. It's been written in C and for scripting it uses Lua. Plus the lack of GUI makes it lightweight and Blazingly Fast&#8482;!

The next great thing is that it's really popular, 100% free and open-source. Because of that, it has a great community to support you with using Vim.

Now that we have concluded that Vim has everything you'd want from a code editor what now?

## Now's Your Turn

This whole article has been written with one and only one goal in mind. For me to convince more people to try Vim. Yeah yeah, I know what you're probably thinking.

> "I don't want to use Vim because I'm **pragmatic** and I don't want to spend a lot of time learning new things. I want to do the thing as fast as possible".

What I'm reading from this is:

- _"I'll look into nothing else out there"_
- _"I'll try nothing else out"_
- _"I'll use what was the first thing that I'm baseline comfortable with"_
- _"I'll never actually learn the thing I'm using"_
- _"I'll put a bunch of extensions and use 1/3 of them and only their basic functionality"_
- _"I'll just scrape on by because that's what I already understand"_

**PRAGMATISM!**

If you feel called out. **Good**. I want to help you. I want you to do one of three things:

- Switch to using Vim - if only one person reading that'll do it I'll consider this a **HUGE** success
- Install the Vim extension in the editor of your choice
- Get to know the tools you're working with

### Switching to Using Vim

Yeah, I do like Vim. If I'm not using Vim I have Vim keybindings on. I'm writing this in Obsidian. It has Vim key binds built in, I'm happy. When I'm writing Java in IntelliJ I'm using IdeaVim. Try Vim.

### Installing Vim Extension

If you try switching to Vim you'll probably go through the same path as me. It's nothing to be ashamed of yourself if you fail. I failed. Most people fail when they try to dive deep for the first time. Vim is amazing. What it proposes makes editing text not only efficient but first and foremost **fun**. No really, when you're coding it becomes this game of how to edit this part most efficiently. So you think about it quickly, do a burst of commands and boom, you have what you wanted (or not, then you do a quick undo and start again). This introduces these small shots of dopamine that will keep you in the flow and make everything more pleasurable.

If you want to try it just go into the extension store for your editor of choice, search Vim and install it. You can find [Primegean's video series](pleasurable) useful. This will mark the start of your adventure with Vim. Maybe you'll switch to Vim 100%, maybe you'll be content with just the Vim extension, or maybe you'll try it and think that's not for you. Trying it and giving up is ok. The thing that matters you **tried**.

## Conclusion

I hope that you found this article useful, insightful and entertaining. The last thing I can ask you to do is **learn your damn tools**.

- Uninstall those extensions that you've not been using for a year. You are not going to use them!
- Read the READMEs of your extensions, get to know them and what functionality they provide
- LEARN KEYBINDINGS - Throw away your mouse, it's not efficient, and you waste so much time and energy jumping to and back from it. Read the cheatsheets of [IntelliJ](https://www.jetbrains.com/help/idea/mastering-keyboard-shortcuts.html) or [V\*Code](https://codyburleson.com/blog/vs-code-cheat-sheet) and the most useful shortcuts. **It'll improve your workflow**!
