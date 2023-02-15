const Footer = () => {
  return (
    <div class="pt-10 pb-20 bg-red-800">
      <div class="flex mx-auto max-w-screen-md">
        <div class="w-1/2 mr-20">
          <p class="text-2xl font-bold text-white mb-2">Brown Political Union</p>
          <p class="text-white">
            The Brown Political Union is a nonpartisan student-run organization
            dedicated to providing a forum for repsectful political discourse on
            campus.
          </p>
        </div>
        <div class="w-1/2">
          <p class="text-xl font-bold text-white">Quick Links</p>
          <div class="grid grid-cols-3 gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
