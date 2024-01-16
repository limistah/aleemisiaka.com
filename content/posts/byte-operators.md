---
title: Ruby if conditional statement?
date: 2023-09-15
tags: [programming, cs, ruby]
category: Programming
excerpt: The if statement in Ruby
---

### 

In Ruby, the if condition looks like below

``` ruby
if 1 == 1 
  p "Equality Checked!"
end
```

For if else

```ruby
if 1 == 2
  p "Equality Checked!"
else
  p "Equality Failed!"
end
```

And for if else if

```ruby
val = 3

if val == 2
  p "Equality Checked!"
elsif val == 3
  p "Expected 1 to be equal 3"
else
  p "Equality Failed!"
end
```



And a simple example to illustrate a use case

```ruby
name = "Aleem Isiaka"

p "Guess a full name to unravel mysteries..."
user_guess = gets.chomp #

if gets.chomps == name 
	 p "Hello #{name}"
else
  p "Uh oh, please try again when you have some ideads"
end
```

Adiós
