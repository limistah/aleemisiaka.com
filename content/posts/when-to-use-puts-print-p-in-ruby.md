---
title: When to use `puts`, `print` and `p` in Ruby
date: 2023-09-05
tags: [Ruby, Variables, Software Development]
excerpt: Distinguish by usage `p` `print` and `puts` methods in Ruby

---

Usually, programming languages have methods for printing out variables. Ruby is not an exception. There are 3 methods to print variables in Ruby Programming language.

### The `print` method

The way `print(var)` works is basically converting its value to a string by calling the `to_s` method on the object(everything is an object in Ruby) before printing the value and returning `nil` to its caller.

```ruby
num = 123
print(num) # -> 123 => nil
```

The `print` method can be easily used for concantenating strings

```ruby
num = 123
name = "Aleem"

print "The name of the boy is "
print name
print ", and his tag ID is: "
print num
print "."

# outputs everything on a single line
# -> The name of the boy is Aleem, and his tag ID is: 123
```

Having `print` as the last operation in a method should be avoided if returning nil is not the desired value

```ruby
def check_print 
	print "This should print without a new line"
end

val = check_point 
# -> This should print withouit a new line
# Now p val would return nil
```



### The `puts` method

`puts` method is not so different from the `print` method except for two scenarios:

- `puts` adds a new line character to







#### The apropos

The man -k [keyword] command is similar to a help utility called apropos which is available both on Unix and Linux. See it as a shortcut.