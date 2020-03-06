class Customer:
    
    
    def __init__(self):
        import hashlib

        self.user_name = "abcd"
        self.password = "1234def"
        self.encoded_password = hashlib.sha256(self.password.encode()).hexdigest()
        self.balance = 50000
    
    
    def add(self, amount):
        self.balance += amount
        print("Amount added successfully")
        print(f'Balance = {self.balance}')
    
    
    def debit(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print("Amount debitted successfully")
            print(f'Balance = {self.balance}')
        else:
            print("Balance is lesser than amount")
    
    
    def user_name_check(self, name):
        if self.user_name == name:
            return True
        else:
            return False
    
    
    def password_check(self, password):
        import hashlib

        encoded_password = hashlib.sha256(password.encode()).hexdigest()
        if self.encoded_password == encoded_password:
            return True
        else:
            return False

new_customer = Customer()

name = input("Enter your username : ")
check_username = new_customer.user_name_check(name)

if check_username == False:

    while not check_username:
        name = input("Enter your username : ")
        check_username1 = new_customer.user_name_check(name)
        if check_username1 == True:
            break

password = input("Enter your password : ")
check_password = new_customer.password_check(password)

flag = 0

if check_password == False:
    print("Invalid Password")
    for i in range(0,4):
        password = input("Enter your password : ")
        check_password1 = new_customer.password_check(password)
        if check_password1 == True:
            flag = 1
            break
        else:
            print("Invalid Password")
            continue


else:
    flag = 1
if flag == 1:
    print("\n\nYou have logged in successfully\n")
    print("1.ADD\n\n2.DEBIT")
    choice = int(input("Enter your choice:"))
    if choice == 1:
        amount = int(input("Enter the amount to add : "))
        new_customer.add(amount)
   
    elif choice == 2:
        amount = int(input("Enter the amount to debit : "))
        new_customer.debit(amount)
    
    else:
        print("Invalid choice")

