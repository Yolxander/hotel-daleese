import { FooterComponent } from "@/components/footer";
import { Navbar } from "@/components/Navbar";
import { Suite_Section } from "@/components/suites/suite-section";
import SuiteFacilities from "@/components/suites/suite-facilities";
import ImageGallery from "@/components/suites/gallery";
import {SuiteNavigationComponent} from "@/components/suites/suite-navigation";

type GalleryItem = {
    src: string
    alt: string
}
// Array of image URLs
const imageUrls =  [
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b6d409a4.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971949&Signature=R3rLef4%2BO7wp74ifXVGTbViNLjJWXTEeYr88UucE1oVeIor5Vv0tKhyq77t8b7yEnO7%2FedGb93f%2BR4kjvMEer88nRfxFfQs5bbnyQiY5NIuAj%2Fjoy%2FvQLMI6wYffM7WqGmuhlvBp17f54bLC9qlY3rmceyqDvOuSBQnmcs33RcLuuk01yVfjngo%2BteV%2BYyA7iZv0dkWXkfm3N69qXmnbQvbq3gukwTx8OApFhjd2MMLwcirSDFIVjBqTJX4li%2FSbT%2F4OECXjVPWGR5df1m453cdN1jLj7BbGAMW6CUmkTt3teb1zYClISx%2Bb8KJnczVmea13520WDwfP185QHZY0Wg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b6dc7372.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971950&Signature=Ciz3fKUerWBb%2FUyFn4XqQudPSpV5mIIMxfsP9iiYblY2YOh38ilB5QmmYWXGC4totNF75DwwhrjF9GKgUQ4KlJ8GAlYK4UgZyojCo7%2FhIrWRt5rtm5lgLzPzS3yMnKtK6rm%2BOa%2ByokKniEftSEwDvUmkl6tdeUNO1Ci60SKiDDuWhl7dHvPQvgTB6TcoP1TE890lUPK46ENzJMWxu8Q7zXoaSVFMgZJgPbmxtv9ucBZW%2FICepNGfx8t%2FgAM2I3b8Ii2siMobCmjkA9tO0U%2FmaBv3hAEVAtxqz1Ser0KI0PaSv17Y7NDZCqm0wu12G7zvYp9o4o0n5XuyfZg5jCTWCg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b6e26c7e.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971950&Signature=ZyKc3HGh3boYK4YCM%2FebBbu%2BdR6DYosFdDCP85jsKvo6pImQTg3nkMraQS8sIE9aNEy%2FbniciWYIwYGV3Fd8s8ixnwKeJIfR121nagmyRXn06SMFQv5VDNwRJ4EEmljGGB%2FhF4II%2BTX2Hkf%2Fby2DEHl0vvH27he8Bnq9dpv0FycNHAUKuFfx5nzGVJ1f2dtjUFm84rkzDFrZ%2BwuCwxYLIsEBtI%2B7Ew3byx0HHz5G0M8JHChvg2wn0B651UwLK33DoA5I9vG%2FvwDjGgMW7xx2GAU%2FbeY%2B5z6bKtV41wQXF09BEhtloIdLsocsXpU2Yk7fZ4WVo6%2BTOcu1De41QlemyQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b6e82ac3.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971950&Signature=KOkMoEXZoIkYJuIAMQVfqzAXdSBpp6MS6rtoMQxjcackObQORznh1YGgSemkmuYDkGVSkYkfWBYz4fPVOh43Hri22XioCUKYLunW2R9UZk2u28JFwYtY2y3fI2lQ7VENPM4Nkm7q0RmCt93mYQzohohgq6YnY0%2FF%2BUM4%2F7fauVOm%2FE0mLGK46YOfsizF9QVVWbbZpFkrRaTht8JBiW5CUEAdfHuKGBWOLjp1sLFYnOg6s9nosOiG15FK06dxUGCtChRkWgm4OwLJyRjU6PE%2BorWQ203JwjpF9OKhnXW0Rs2qH%2BdEawH4lNNSCDhbloMXo4iWEfdX3H1tJLeDLsUqPw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b6f41502.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971951&Signature=O8I%2FnfunV5LRp%2FJdiJBR6U4munq0Z31it5elMLufKicWLI%2BxWVNBEKq3jcdrhZcQQXDMrsA6urozIFlGIlS%2FcCD100v4nMI4eRozZFu6HIRGQ%2BkQMN5oYYbXeyVv3uHAshEw4Y%2BqdxhGggiPVUMQ9ZaO5XbH7vScl2UsraKL2bQ8VYookflWjW7ILAiLC0s4GMwc9QxHbcpDdPERrXsaCSWBy4%2BnkJXpFhOi7%2BX3wVSFR4hGNQivIuZKTI7kv5GKHRLv%2FKWApqmKuvyldMH7oK4dW8S92BAoX8fMfxYZibG43Oa7IKV4dWGB1Z4wqsY1hRcHEXbVbUoeoOpG7w0PDw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b6ee62bf.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971951&Signature=Ejegwr6qXb9KdQu7Zbt6TA0O3JI051imdJq2pr7kHRk7hQyAQ3EefhtVrHj2oaOoV9QcChbOZ1QsNlmtMBMUnI8MAsWJgccVM4hi6EgPdTieUCF3Tn4WEo%2FaeALm6xDKYDHuAlyBigmXmNvNojc5TITCfc6ToSzK2MRN1mkpHnpxH468wpS2v05zBVpw%2Fg9N8dONhSIG0N86UbkBnA4JL9PxlrBYEOnY0lc5pFXhAGCYSizDoAiq%2FFxPmaVssCeUo2feSjA3ssFS9W0h2Tla1rSnGImcImZJOAgM5X00LrHozyRCL28XB7%2FO%2B0jf%2B%2B8yZpqSdhatQt8zL%2FqsRD3YhQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b6fa141c.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971951&Signature=aLlDkCJhvM5LXn1OvqGiL%2BLur84KnVGe%2F58uMRyYM9FqtHS3WdIcn8sT52wsvp6KS7BFk%2F6AlKu7ZB4l%2FPAGwLxoSA6uJ%2BzP0vYHW%2FdqWgN71ijfHfmqI3MnrWWbwUhGvN2WBnttysJunbzpTmLv8Ay80ohyt2499Y9x4uBoW5WN47ES73R9AVGBtPkD35KfpU1ZZOsUXyS5DbHn8fqY4Q2LLVKe%2FSv0iJTLqPAUABsgklPzkutu5cYy8AL8EiT4UBDK1mz4auMQDeRCIJuAnAnKUDarMFavBV9uPZyI0RAZz9azdq8SYP0zPdR12fVIHJQzLjB7Irzj5WVFZiAtRQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b6ff1caa.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971952&Signature=PoyjTKmKUfzLn8yUyAeTHo3cWWGEwvCDGL9BZpEGiXoaR3jMMbbRRsbyU4ynm1jXWfaZXLu%2FMJJlg2whd0gqdBQwRQXGLfI5YZVpAqD4xsdFqwLILma0LSm7k4mjdl4NuP6fwAKeiCDhOIbXBKky35Vrexp5wd%2FTkF7PbznBOkKG41fimb3Aol5Oep0Bkah%2FoTqUhu0uksTccmyL8bJIgESrLytUq%2F0HpkmJwI58p3AzOAftcyasHqDOSaaWEMFVFzjSK9d6uwl%2Blwwz1usnIXYoOSonsjco5eq9EgZd2H%2Bhne69weIR7dkNmCNas%2FKftscVzO6HWfzAJ5F7zRjl9w%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b7047c93.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971952&Signature=FI2edYHNbJsONE%2BjXzNRzaqubqET%2FyWvzjaZtoYO55s40FmeIlKo7Y%2F0X27BOe8jZQeB7BRVBm1iTvZVXDgWMmxgPi18UkThdzEApef1ihadkRNczrXlwYTt%2F9of7F8MxwedviCBmFMH0X%2B2k%2BxMBvMMbRY%2ByArqmY%2BkV8yi5t8DIoUpcssikAcyEUyJolS4Z7BlCA7d2oUjsnCaaK%2FcuYL4PtYzWC8aA0SljGif7%2BiyQKoMJPL69K6XQPNdxMYFyam0LU%2BA7X4p6s6JHJvEZkupzBPFKOHtcrYjxseqc7sN8zgxPyTQH502XnnNlyS6EsejZmOlLzGWnwKF9KRnEQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b708e6ea.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971952&Signature=ZdGagNzl8DBobb05CBOlfflwI9iIsbJbawYYLd%2ByXA12Hnic8p4Rag%2FffQpGZumvJImoTt%2BRdXRW4de47Obx5UXSaampN2SqOMmCnFJ5ELOfPjnwkdsbf8%2B1jXbk6wTWIMqgIvWQ2UycY3L%2B03pg7r5NWUro4Y%2FOQCuNeS2tcJzB8joBkcU3AjpIiaW13hOrB41zAzPNnXxNNMv8h%2B2WXULm94TMVuYPva3QNPou7HRdR2yMu5m%2BMLOIVkJABk0%2BZd8hv6izy96641PVYT4Fk4ATbGH5D3V4qL1ZdqGcZ61amssUF6L8Y8Y5ZWeJ6XMizkVV8HUbt4ouXmsB%2F9q7Bw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b70caabe.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971953&Signature=izmSzRjcLCzrLal68iwm8Xw4ItgBJ87sYF4A6b%2BiO16orRas9%2BpkR9VgQx8VaxQmkMucRryvG%2FOEhRZO5TZohjOJwknQUvkPlyKVTd0UOcSl6Zj2K4vZVtlvWP6dBQUupnsfEgFt%2B4DOd%2BFpmJQA25zQuQAgeDOz5PuaMobkKvOvDZ77bmdcbABlyzzmO0wbTWbCn5OxR4mDceE7P6lhPvUQscyj3QP2MeVRyJy0dDb5oM%2FDE2oAoYlYZj9lvKwTJz%2BySYDAN2qoj%2BYFPtVY13C8B4mTbMF7E7%2F62BRT5HyKnHRzyuYtnYdjRFKKIIQIa8kZwT9bbfRCyJSCD%2F%2Bp%2Fw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b713027e.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971953&Signature=VW%2BZf2IIPHCxKBXPu47PfCdCvD7zKm1BFIpzFe4c88l4M1NNYAkjwOe7xDi2fiUWp5%2FG8Y311x13Vji4tu95S6zS22DD6U%2Bu1Vkbaq%2FTKRnic063vbb5vjvODDGEUgKzoKhc9Ctyi5V7zZEi7fcqUqptCghMXqmlGZRzx%2BclNIpJhW70Q23DpNq6yoLgAio0S8fWbOwykdRYGwITbRFWMskKxgbUqq6T%2BHxCNrhsrfBuMK7%2BjUpeFg2tzpzf7Ef4ccWgq0g3CEUCEv%2FLJ3S7AiaGDdoqVCh1oJmUnqze0r1CUTbPSn10V4g1NHBUFpETE7agMSXeqZSfP5Ok7%2Fzd5A%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b717ace5.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971953&Signature=Wlupr5nlcTHNOeGsk7Tuo3JlBm%2FVeAKHQQw65nMS4ONWeX02LKj3OXQWEEoNL0VK1COA1JHr1CxLGjwusJljM8XN4UYBxD7yHFRn4WDaXbOKz3167KspE2KYglJUOHAp5BIoym2IFULlYks2Nr%2F9zTnQmrwdZ1USgWC%2F8CRTPDpDc33t%2BIu9FhQStmYqKE39J45hWM16%2BDZ8uVdruoGe73kopez0Ru8yYeDQ0jELFakUSbEfb1UD5yvTGBGZZzfujTe6Z%2B6f8CylmwGAGAevQPdvJMDk4vI3VJDTr%2B3Xd3ihTIUvrOAzd5LCXg%2Fbyqqg5KrmbVA0c6fCGh3n6wuE8w%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b71c7cb9.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971954&Signature=Q7%2BDAUDQqNCaVLOP8xQDeNE82PkYGyvm2mqLuwDeWG0rq10fK4tPhPBBb0aPIehzIQrIxSTPqO%2FM1WtKk1GRzfZrvvQ6FxmAmr8YVr7WFwEqrPHALtP8d%2FqPvLl4pwFbv9cREe1TG2fcjWSyHU4prIpky%2FESimq2adWjVVCv0EDUGSnC52xk%2FpiPwWztN99eHXorOWq0b0LdFlGf2%2BVVJEwza4Z6%2Fpwl27WdQrrJoJxfWbVHj59HK0w6NRxrM%2FCeLhHQYBqQ0WI3pdvBxYGUkLk1leRvNI9Y%2FHN%2FsEkEOScrDuuJEQGQJPy4b41zrIUmhVnhKgpGCfL%2BrIatKQZLhw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b72180da.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971954&Signature=bAvXdYaUU1xWCoiPb1RWlVWkXUcynz6ByDQJpFIjesGBA6akl3DsGvYZMJ5teUsph68pDXZg00w3HUFdg6uXTmWBY5x%2BcPRaZzTpLaBqZfgXTxdeQoqb5rhroeoizE1CGGfUU7%2B%2B0F%2B5W1rv9r98u1ZIYw2IpVUZbq2nRaW43IAp7KYdVzM6SpM%2F7dCqXXT%2BS61ymNU9vFh5DUQK7q4G9VnfO%2BNqOX1keJRZnQDQiKtZ%2B22N17dkTdbnpwxSXMehO%2BVjfeRw2od3ddnrWrV%2F6H53hd5iBo3PTzRNTfu36gKfkWVAuXcDc7BPBK5n%2FR3dVSz2ungTcHIgOt0QZmRUkg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b72acfb5.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971954&Signature=iMnDEraA%2FgekiouTlm99KZtMsdywVaapna5MY%2BurLoUsIkIAhDF3mXC22%2FAsfoK%2FOd38hD%2F8hMoUz0pcom1m3JuwtNEsH5y7xDevuq8Xk89EMKs86euGmYya7CVK8G41Rhq7aVH1sQOBn27kvQ3KjjMLHZpBGdinX8xNnfaYrL1jcFIT2QmqjmpxgC8tZC0b9MabCEdSh4ATa7lYfyJZoydv%2BWPmTcu8pPliidD%2BLrJ5DVdS8cl15RnMrLr267f9bcpWdTW2WY11Nwi7n%2BmMxLdHSWGjuuGO9iPgVgVaK4%2BLCZL2ZAdWd%2BlzyptX6CdJBTqFZ6vRlGAb5sakOl7UwA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b73126af.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971955&Signature=pLGuxPxAH5k6V9FGsHtMO49Vecxbx54xBkEZfVDL1FN1XVSy6UZNhROMXG7QjuljRmXDbjhgCgivXLzRJgpQf6MxvSiyCCyPwXhhuf5kPkkQIHSJzUzpPuc2SvzdDvsX3HdvKg%2BJcr2TwnVu4Hg2Sqscr7d5r%2BVubcZjgA9%2B%2FpbegS32TXYErzjVqgZmtUjBCRw3lpDPUnwLCl6ZW2wIRQE4sdfoOKIJMO1aCPgayMcDYrwh79Jbw1AjrLWuJSSaVqstXQrZlnUT1Oxg9%2F7agfvZ5nk8wKHauZXsjsvhtY%2F%2FPhXh4ljyu7s16melQj1qP2ecyIlYdxy9lwgPMex1UA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/67245b737ee85.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761971955&Signature=mgxSoNxrAFYA7H9Do%2FSkVuNM%2BE8bATNWFg0OIkTwqeolN%2B%2BFW2rHp8vBiwcrj3G54ixjV7Z3iYB71d9W%2Fw1V1gjwvdVaiL3U7IF03%2FHUBVXj7IpvoEZdF4duGcC6QMIBk3oB7tPDeDM%2FwdmGXHbTkXDKSAwT8jJ%2BEjoJyJsMq1Y4fkkiGRP3ehjkZKs752FL7h1NzEI%2FPqrl3KUyFDUQtH2yHyyx7btH%2FN1%2BbPgpJaScU2hmKlbjqCjxuch6ng7Q3UTHbnMtA8l2qzKJJIOsAiMb38QTtsEhiuylZcq90ez%2FWQt8r2JB5Wd1GW8SIUzK%2BSk1i%2Fl61BhF%2Fg6Iq8JxDg%3D%3D"
]

// Map URLs to GalleryItem structure
const galleryItems: GalleryItem[] = imageUrls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
}))

const imageSrc = "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%202/672301ae6af1c.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761883438&Signature=LFOa7ciZ%2F7OmNMkmq%2FE%2FCufWn%2FyFKG%2F75BGatA1Mn1vjvTeH2PkYzktMnYlhkD56Ezyoy6x03THviphQK29LxzwkEMnad73BRP4Yjf%2BkUz%2FuLQDQtS9c3GPQjyhlLYwmkKiVvLRMwEGTkgvJyPPtIXWQnjGDdV3t4Vf5Y3c0P%2BeSySyuYZiwcl61TUVHffNfEKsz6DKjZpoGo01DEsZpnMLxj29flhdwI7SnKTeJUscoP0zdVx9Scs0OHNdtuOVaQ8DAjpMAcOoqgsjxvX2bu9DxoK7hBO2mtBQGRRCfCa4P%2BlD9oACmH%2FQ5dLf6CB1cv%2B8ZeuP55vPg896Ejswg8w%3D%3D";

const header = { name: 'Suite 2', description: "Studio Suite with Garden View" };

const suiteInfo = {
    facilities: [
        { id: 1, description: "Entire detached ground floor unit with private entrance & garden terrace" },
        { id: 2, description: "Queen bed with fresh linens" },
        { id: 3, description: "Full kitchenette with coffee machine, mini fridge, microwave, toaster & electric kettle" },
        { id: 4, description: "Iron*" },
        { id: 5, description: "Smart TV with Netflix subscription included" },
        { id: 6, description: "Sofa bed (sleeps 2 small children or 1 adult)" },
        { id: 7, description: "Drying rack for clothing" },
        { id: 8, description: "Bath towels, pool towels, bed linens" },
        { id: 9, description: "Access to hotel pool & lounge area" },
        { id: 10, description: "Tile floor" },
        { id: 11, description: "Single-room air conditioning for guest accommodation & fan" },
        { id: 12, description: "Washing machine ($)" },
        { id: 13, description: "Clothing storage unit" },
        { id: 14, description: "Private garden & outdoor dining area" },
        { id: 15, description: "Glass & screen windows and doors" },
        { id: 16, description: "Hammock" },
    ],
    bathroomAmenities: [
        { id: 1, description: "Toilet & toilet paper" },
        { id: 2, description: "Shower with complimentary shampoo, conditioner & body wash" },
        { id: 3, description: "Hairdryer*" },
    ],
    views: [
        { id: 1, description: "Garden view with outdoor patio/terrace" },
        { id: 2, description: "Inner courtyard view" },
    ],
};


export default function Page() {
    return (
        <div>
            <Navbar />
            <Suite_Section src={imageSrc} header={header} />
            <SuiteFacilities suiteInfo={suiteInfo} />
            <ImageGallery galleryItems={galleryItems} />
            <SuiteNavigationComponent currentSuite={2} />
            <FooterComponent />
        </div>
    );
}
