import { Component } from '@angular/core';

@Component({
  selector: 'p-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss'],
})
export class GraphicsComponent {
  graphicsCollection = [
    {
      company: 'Foreveryng',
      companyCode: 'FY',
      description: `As a graphics designer at Foreveryng, I leveraged my creative expertise
      to craft visually stunning and compelling designs that resonate with our
      clients' brands, elevating their visual presence and communication
      strategies. With a strong commitment to innovation and a keen eye for
      detail, I consistently delivered high-quality design solutions that
      leave a lasting impact.`,
      images: [
        'https://lh3.google.com/u/1/d/1NHHhhuZ62W0WBwNKNOkJk5xtK0ocwdlP=w2592-h1782-iv1',
        'https://lh3.google.com/u/1/d/1UeHCM_NDn6R-8znbHgGWzudm_xUfPH92=w3840-h1782-iv1',
        'https://lh3.google.com/u/1/d/1otXavAqLhAHAkP-EkyC9bJqKjEx9VDTH=w2592-h1782-iv1',
        'https://lh3.google.com/u/1/d/1cmspFtJgr858V9TRwW7o-Fbobbv5o1Jl=w1657-h1742-iv1',
        'https://lh3.google.com/u/1/d/1cQVVGTRgLkQQ7nbU0inq0N71WntyR4u-=w3840-h1782-iv1',
      ],
    },
    {
      company: 'Khaaidim',
      companyCode: 'KD',
      description: `During my tenure at Khaaidim, I specialized in creating captivating
      social media posts for promotional campaigns, effectively engaging and
      expanding the online community. My creativity and strategic approach
      were instrumental in driving brand awareness and fostering meaningful
      connections with our audience, contributing to the company's digital
      marketing success.`,
      images: [
        'https://lh3.google.com/u/1/d/1yCOnFUzwsF8FWm-YAYhjfHKMWG9ySxm0=w2592-h1782-iv1',
        'https://lh3.google.com/u/1/d/1Z8XUUsHsvGPhBXqO8cSBlC_M1oCYbZj0=w2592-h1782-iv1',
        'https://scontent.fybz1-1.fna.fbcdn.net/v/t39.30808-6/241893475_383718183165213_2751998818771023120_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4Nc44iynZO4AX907X7o&_nc_ht=scontent.fybz1-1.fna&oh=00_AfAU493zOykVQauWaGFluntz3oFUrdQ_eDhshDetGlJh3Q&oe=65428E1A',
        'https://scontent.fybz1-1.fna.fbcdn.net/v/t39.30808-6/301204429_478776187589317_5651739911052553699_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4ac4sJ2gM6wAX_YsUdy&_nc_ht=scontent.fybz1-1.fna&oh=00_AfBIaXZmJMAeTneuzQ-pfFY9emfk4J7Laq1noAIOjT5S7A&oe=6541F65A',
      ],
    },
    {
      company: 'Shinning paradise gaming',
      companyCode: 'SPG',
      description: `During my part-time position at Shining Paradise Gaming, which primarily
      involved promotional work for betting events, I specialized in creating
      compelling flyers that effectively drove higher event attendance and
      engagement within the gaming and betting community.`,
      images: [
        'https://lh3.google.com/u/1/d/1nbiCHKdV4xYfAr2TrcUFx9Bmr5SYEgR8=w2592-h1782-iv1',
        'https://lh3.google.com/u/1/d/1LpROig4xgMVV3NxPKxCLQ9AzO8iHZTyo=w2592-h1782-iv1',
        'https://lh3.google.com/u/1/d/1za6fnUR03mN_HJaYi5eDv0oBTpyjcPtS=w2592-h1782-iv1',
        'https://lh3.google.com/u/1/d/1TG6YErGxEPREG80n5QDm7haQUs9sI1Nd=w2592-h1782-iv1',
      ],
    },
    {
      company: 'Leo Club of Kathmandu Resunga',
      companyCode: 'LEO',
      description: `As the IT Head at the Leo Club of Restaurant, I was responsible for
      overseeing the club's online presence and created engaging social media
      posts and banners that effectively communicated the club's activities
      and initiatives. My role played a crucial part in enhancing the club's
      visibility and engagement within the community.`,
      images: [
        'https://scontent.fybz1-1.fna.fbcdn.net/v/t39.30808-6/267589657_4774488852612169_6204477317990511378_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xQ6RdFGWjC8AX-SXbY2&_nc_ht=scontent.fybz1-1.fna&oh=00_AfAxXoZgdrn4IcsjwpH4ZS906wNuu-WjySItVnDolXAdDA&oe=6540AF8D',
        'https://scontent.fybz1-1.fna.fbcdn.net/v/t39.30808-6/239438904_4411688255558899_2963703144533469872_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Y4M3iHJz5HEAX-vEd2c&_nc_ht=scontent.fybz1-1.fna&oh=00_AfBNZdetwLEFABIlGi6X_M3JEc56-2Rg_0nhHrPoJLSRHA&oe=65420411',
        'https://scontent.fybz1-1.fna.fbcdn.net/v/t39.30808-6/236899964_4381208918606833_2283980529247408310_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=wBseOAMFdpoAX-xGkMF&_nc_ht=scontent.fybz1-1.fna&oh=00_AfAzvDjgpPywRmwzDh8Qkcjijk-SgzFbinFfuO8F2V93Fg&oe=6542A4F3',
        'https://scontent.fybz1-1.fna.fbcdn.net/v/t39.30808-6/271436358_4867632163297837_8803574718444474683_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=xWOYX8mULXUAX9c_-IY&_nc_ht=scontent.fybz1-1.fna&oh=00_AfDdsARDnqNSHJ4JYj9UjmGCPT3YobFvYiNDZkbu_XYFDw&oe=6540AD82',
        'https://scontent.fybz1-1.fna.fbcdn.net/v/t39.30808-6/275449161_5076649492396102_2878455987814828174_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zLKFPLw5RZwAX9v1dXI&_nc_ht=scontent.fybz1-1.fna&oh=00_AfCAwlyB0H_wMlLh9WFuKW-z6ULonK00gKrqIcHkQcct1A&oe=65428564',
      ],
    },
  ];
}
