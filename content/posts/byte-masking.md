---
title: Byte Masking the ins and out
date: 2023-09-25
tags: [byte, cs, computer-science, low-level]
Category: Core Concepts
excerpt: The idea of byte masking helps us achieve abstractions from the binary concept of computers to usable technology. This post helps to solidify byte masking using operators and gives examples of why we must be aware of this concept in our everyday software engineering craft.

---

Byte masking is a deep CS concept reserved for the nerds. Here we will attempt to dissect the topic and provide a relatable experience for everyone. 

Welcome...

## Masking and its Relation to CS

Masking is a process of concealing information. Take for example having a string `"A"` but revealing "X" to others such that only those with the information on how to get the hidden value can retrieve it.

A byte is a group of bits(1 and 0) usually eight in number. Such that `00000000` becomes a byte but the individual zeros are known as bits.

In CS bitmasking is a process of taking manipulating the bits of computational data. For example, converting `00000000` to `01010101`. In CS, it mostly denotes what bit you want to keep, and what bit you wish to clear. in our case, we have divided the byte into pairs and cleared the first bit `00|00|00|00` => `01|01|01|01`.

Masking Operators

Basic Masking operations

A real life use case of masking

How masking helps our daily lives

When you shouldn't consider masking

[Adios](https://translate.google.com/?hl=en&sl=hi&tl=en&text=adios&op=translate)