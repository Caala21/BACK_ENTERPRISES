export const SITE = {
  name: 'Back Enterprise',
  url: 'https://back-enterprises.vercel.app',
  email: 'backenterprise01@gmail.com',
  phoneDisplay: '+254 111 896 643',
  phoneTel: '+254111896643',
  whatsapp: '254111896643',
  // Free key from web3forms.com (enter backenterprise01@gmail.com). It is safe to be public.
  formKey: '6eca59e1-82dc-4913-a164-4703b8c51f46',
  socials: {
    instagram: 'https://www.instagram.com/back_enterprises/',
    tiktok: 'https://www.tiktok.com/@backenterprise',
    facebook: 'https://www.facebook.com/profile.php?id=61594073909279',
    linkedin: 'https://www.linkedin.com/in/cliff-njogu-1873b739a',
    github: 'https://github.com/Caala21',
    fiverr: 'https://www.fiverr.com/kirkklif',
  },
}

export const waLink = (text = "Hi Back Enterprise, I'd like to discuss a project.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
