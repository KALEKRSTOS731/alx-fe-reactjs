function UserProfile() {
  return (
    <div className="user-profile">
      <img src="https://via.placeholder.com/150" alt="User" />
      <h1>John Doe</h1>
      <p>Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;
.div.user-profile {
bg-gray-100,
p-8,
max-w-sm,
mx-auto, my-20
rounded-lg,
shadow-lg,
"sm:p-4",
  "md:p-8",
  "md:max-w-sm",
  "max-w-xs",
  "hover:shadow-xl"

}
.img {
"rounded-full",
"w-36 h-36","mx-auto",
  "text-lg", "md:text-xl", "text-sm",
  "sm:w-24", "sm:h-24", "md:w-36", "md:h-36",
  "hover:scale-110", "transition-transform", "duration-300", "ease-in-out"
}
h1 {
text-xl,
text-blue-800,
my-4,hover:text-blue-500
}
p {
text-gray-600,
  text-base,hover:text-blue-500
}
