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
const imageUrls = [
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e5619989.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972694&Signature=SiusNBbyyjygCMuAg7qVOGG%2B4xTWmvrUfUZxfEhGW45nnTFnFnTak2EAMUSRfanQP562KSHH9JGTBPidK7LLHugNpV%2BC2%2FEs6bIEgBYFyVo9vpqd6Jdl39VPNt0Z2gh1C7KRlyEwhzW%2FuhonzAZFWw%2BtCJkOt1aGl1yeXzeYwDNBsD9AVvOK5XA32AWoq9u157QK%2BPyDADJdraRDE9wL1hnMa4PQXdiMNA4cxajFRRyKB3hcApxh968pVN6iu1sllbPCmnl2Ok5FkSxq%2FEJgNqfCUSI6RgU3l2vdcxQC9Fu3howNLm5KjJ%2F22ecIEvvtvEX7MwhcU1eUpb2HMSku%2Fw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e569ae70.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972694&Signature=TXjsFfg8XK50BmJgszmCxlBn9RrX0aWciIMfOLDfpo4aA73PqznJyFSM4RqxwX5HBBs3a8jqL71TcMb683d0d9mCL05VX%2FDhr6KAYx9nn50lrjGGgWVzDJ%2BWq64QGTHShcqa8ZL%2BTUNXTHYXS168yjUPbeghHiDq6Yjx5bacXK%2F%2B4GWeYxukYQSk5J14JWLdmHTE%2BprEp7Ak1ey%2BR1vn23mnUQH0o%2Fg%2BqzIvfyGpWWK7mBZ400SUm6HJesSa%2FQIvAX7HWtVa88QHG2VzPKi0v%2BpjhwEYPzWiQDtGguFvewA4LSO2k4I64YpjzxVVfb4YG5aWl4qOQRWOKe9snYG9FQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e56f180f.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972695&Signature=hIMcJ4YLtHfS9M4pCgrsHA8HDoK5NaaD7Aru%2FJ4E%2Bn2iUYNYzxXRFeYt6HVKPYrGlk8tGSDlxUNepHbpr0LUVmzFXtJsecBXGtozF7HjZX36620KMB4eeFaByCaKl0Cr2yC9%2FA4yfpN8MhMyGGj0XAvFd%2Fekm2o%2F8DvCcQ4KsSKw3J72Xh5iE%2F3Z38%2BSXG51ik7tcZyjfwSw2uZ6qj0HNts45ch%2FZ54mjwE8BI83TY4an4p98pPCk07NRnEmb6ZUFvPE2FJwqSvbEUSUlCxwy3fLDobVknggGBaxD03mZ19F8WbRuyApfd9RsTQgLj8myxF00yNpLqNS2x6wVlX7lg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e579462f.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972695&Signature=EsghnJTgHD8DkrV%2BISngtmyhBKbwwFUxVebgqsI0PvPGgASVviBbI%2BiK9%2FwvJtsQSE4SokKWqTiWU2%2BSI%2FhICPSH2uICOYScJ28HUyw36zQ1b9CKnXE9dmL0FfbL%2FLNR4xDY25C46jzpMBhVZdkk7A0TN3A5gqKqKGn8rulOZP8yk%2BfOOAyCBocBWG0Msj1BUIKW3QgPwrKAXld17DFmtQJtRgcyMLOgWP98XJu%2BNXucd5Acgh7w9hdu%2BXXRQzXZloJSHZpxCTyfobQ0HP8zX7uR2xewpBwNDbChGWeMRtKWf1abzEdkAb7eV59ngKLqKLUBFqC19tm32uoVUs56oA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e5749569.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972695&Signature=E8I1FNGkOPjZOjywpzdfBsUv3QraoXiIDMzCDz%2F17HFclXNNjzeEyibY8aJ9iGr6gIFCN5KqZsCxH19%2FtFcvw6NEA7q0aYakgsNFdJiY%2Fx8dY0Qr6eZdMMcIlybS36LrGD8Qj3cCbkHIGKpxfWEUg8LBXNYth0RL13KWbWjDPYhu76P3EeAC%2F%2Fq75PUAQ9%2FmXYcPCysoGCw0Yb4YSOrYWjTd0FVXtNZQQNBctzbO42jaOJoHEYA7EmOCPFUuL1O24mSN704QGKN1k920DUh%2FZA3fuY3KnsKiIYaMVV9NN00cBBtWg3b1Ro1UGHaS2HEdt3VvlG6hCfutWPtghhA%2BwA%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e57de0c5.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972696&Signature=NQ2FoEzfkGMqRrjtvBPHWWY3I9AaHtIcqG3FjRm1fX4EHc4dUMGTHC%2BtoiMfAhK7%2B%2BtK47kRxcdDop9CZJo9fiTUXn6mnhfMCZdZDBJ%2FqKMWI31jyk69mhporD1vf5DTz7jty4DIRJIDYqBjv%2BBzBP7jX3bbFpHCdKqkoZunHvypaQ1FLT%2B%2BCtSZHj1Ca9HRft0EKcSXlG6Du8E3hiLsRevC09czG9CEl8wEN8kzPmjNgNhHHZc33xcJiDdR%2FbZvx%2BXZ7cJittcg8i0DPxRGEuRPBiD2PPM87oISZagPaxLJGcx90GiPSFAHGoMVfgYpeKEk%2B7VBIxuAtpKQ9tm2bg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e5893fcb.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972696&Signature=SDOL9cqMhUXJg%2BW2bNT%2BWr1C2OkvKn%2BqyMk1K80Z3LOdPCWSn9WYEP1F%2Bbhw5FpGu9tFq%2FXsIjfd2KH%2FhLUrE9cmS2hIp%2BTTGYaAaZFcMfIAstwjDYfs%2BpJGreN2qYhjid8nfC4R3KVbEx%2BRxdWus7llMlYFhSaebCI8woMSc6g114TrbQonPRIM74OkfMkrEHVDrjNwvrafqOlrcE4s4I5V%2B425v04tGVwRe2a05Lz%2FKZdvcYH%2FACeoLqko6DcBGgIL5y7B1PCk%2F9TOAoYNRoxne6xr%2BP5RntYOopFC3U6uZGYCfeaEE4BUEj31jGwdXDS6U69XspLDI%2BJYoDGrCg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e584df19.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972696&Signature=MuREVYgVfLE57oGeJycxY3wOSbHRuMq%2BCkMNPnf3dxSmRhgJZmz6zGgreEZn2p8ByU92ptwDqqxi7hDZ3f1761AwI5FW%2BKYijAdSPsaUZVbPmjxjwmnNR2WU7E5EsNdNdZ%2BgAX9y%2F7RvUg3w8INvzLIEUdh6teWbU0u64PcnIteycadkb1CyeO5wbDs%2BGVGwoeDPfjcqC6Zso2DkZp0OdFuCLZBIFsMp1%2FqtSNcz8FwKRuOT6I6Q2OwWXGSI8a%2BpmiMdsFFIC%2FEnXa1EGT5iB3V9vOndS%2FXiqVyGZ0jjyhDSFKi8203FT6Qq66Pc76nRZv6xwnMIglHKpBAs5seBXg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e58e4c78.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972697&Signature=gllHwY%2B03BbpofAH3%2FD0aeLnXTWKMlF5kc%2BWCVbbsGG9K9D5Cpi%2FrBbPWZxcipfaV4JJWOM%2BMc22fx9Wpms0dYOZj1VI%2FCm3Xi79zqNppxC8VQnBuoamYpZ19tRP%2BIoSEktzfvH4Qj2PX4Xy7UIkRV6UHns2s5kwTHuPRuNU6el82Wiy%2FmTTM2ztNzMLQbXvQqE14edj92ax9Xyi5vz2MGBlkxeN7ZBw51%2FebO8UdivCcYXMmX%2FKk1mCk6fZIWxlGCGhpqD9Wa1dEFdEDMCEKu33IoF%2BTuc3GTVNeKjAIjhstRtlzy9IjeSkeh0yOvDpIFJJLJD72dDGxFWx84FQmg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e592c211.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972697&Signature=eUQJFoFuvpCl3iLPIq9NHh%2Fja9HnnXvYp3uuVOzLzJViOSMDRKEW8iX03dskyAmZkkom%2BeW8tNAOyuWuPcz14ssCrMxiIPkKPXsEovq1pNk2lOmeoQ7N151kcTaQnXCvEQPl7AO1x3s2hjbF6Ma28sLeEpvJHZYNvq%2FBo8Yn4gUr5qYSWUMfKvptLm%2BifbDSVv%2B%2FTydlOoy%2BS%2BAy1jANn13zgTUBVZBGbLHkl5QWxYDblCfuHvJTKdAn2GTMn6%2FyVw%2FgtrXZUXYkZh0BXJTWpTabkAiI3AkMvFmhNPy1M16PUInjjYH3NCIoSYozQFrjHxxYOVOkjohTJzXyAgGQmQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e596d196.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972697&Signature=Ne%2F4w1%2Ba%2FP80pgchDpLBrxxY9IbhyClypZpAFDoGqcKpo%2Fui5gs2Ty26zth4V6H2H5qtBIox1M8N12ws3w%2BS1LaFF4JoTNGz57c3Lx2Sn5pCWF36I9zJgqZpYh955obifje2M%2FuCklz%2FnGP3I5Pw%2Bkr7WGaHPyuh5V40UH5ng3iIl6NUrJb2fx%2FO66DjLKGoHfYpozgjwMTmNURjOOB3vgXNKXgN8tGcFlBH5VuRIrliw4s3h%2FVG213KDYjIFx6paEsDbdraT6lK%2F7jxgtBkbVdtw%2BnAd8zazsIt3KCWitM7fPCG98Z9bQHqgVAX1Lw8VaUVwbXJFErScZ%2FLg1j20Q%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e59b79aa.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972698&Signature=h8saqQYBHqxy%2BqUO%2FLgqSV3xOg1%2BdySDYNV1E903Wmr6VCkt3hLmPRrnARWTLvWfFV2M1q8db6%2F3nVPpAalcVj0xaJT8t8%2BOz8yIZg7v7Izgj9uPq%2B6hy%2FNxUcPJiWT3qdRQYqpi9bVu1YJMHMBsFsQuWqjrduz6eoDuo7EMQ8OdlrGGtP7gHigM5wImSrU4qZONX%2F%2Fu6P%2FGc3LcBRPy3g2MRQVYzctkNaLTDEXeuCdhwEOGu1j%2FkGGic47sYIZb0yHP1wHNZ0WKMktpT66rno85349tAaeFbVKr04pi%2FWZc1Rqdh4g1qUwmmdvXFv5TOiDjuToFQDaCl0Lo1B%2BJVw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e5a0f116.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972698&Signature=AvEiWZ4LpMD1MmcMbFILQRtPEQVSWNw1drCPCkxTum8IUCtx6uwu%2BbfKrkHrY48kFYZ6MzEsHn9kJoYpld2xY95m3hm16oUuNxgTHsKlB2rZUlPSmS6T2VCUTF8CLPtqqQu42gTdmyeCOLpfxAUuyuk0iT2Snv1Q8fl21mMeztoIEHm8zrqWHamJ6dIr1nE5OgxMimv98TVxdRjNkkL0IoHzcFkmWspwfJ0o8ess5NcsQTo22zuVKzLWpAyWtV9tX%2BfmTpPwuIHjWaeY9omixdivKQgIM5JgUYlUlnXbbmHj3I0jkHBRI%2FFhFB4aKp9dU7NNsm68dNh8Zm6kjNKvIw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e5aa5f61.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972698&Signature=ZIqqRZNd9k%2Bm6gQQrTYNb1h7PHIIrQoc8UzWQBus01p2WmX3l7GifDiDWHQ6NUUlku5fvWkm6cr0tjdLDERJ%2BVZQCeoBKjYDweL5JjzEkHjk2kuW6FEgufTd%2BKTi%2BnQ8cnSg3gekRAsKIWyTNExqNlL6Ovz6bgzLieJ7WQj8xwNOXFQuDH9f3KJ9HLfmY5aFAEHpeyEfbEuqz25ZDFc4gMLHEB81dPchw%2B10biBKLzr%2BN5bqtYn0MaC6Plb43zaFWt9Ds9v9K82BPKjklUMc01ku7JTXtJ6Y9wkRpQh7vdiuioAbAE1fQKpoqhO1VTKNMZzvIWn1Vs5yZRB65vqIIg%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e5a529a2.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972698&Signature=Qa6b4vG1ALbZfLwye0JEA3XkmGCAv2vgSV%2BpSWOw%2BgHnNPgQ3nLNBZ%2FMqjRtDM0rLewsm3541cqN6LtrYlDJ0pWKn7HpX7y1A254CcTGg56sEcs%2B8NVnNvMdknV96qxBCAQD%2B4%2BNYNsLh7ad8uyMYAu9qBZ3nHsO3Bsj%2BoUDL2fLh%2FZ%2FchcjzclnhAJkrKsBxNNBsdfgh757vx3KaghLbbOylL3B1RNmClM5%2B6hmDQ1FsahAVedshKRTEUo4YexJnyfVlYytNe6B3kGvyG%2BXUF3jYiOC4YTPjVYKdxAt0VyvJzLi2nj0QTkmo%2BK9A9AuGEMRAH1at8DZAQmjGYAlQw%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e5af122c.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972699&Signature=UWtDakhm3jM8msAhCj9mbjuUwWtL2oAGCdsxMkQW1n0Q9p5496NolrwcVHmJyW8vX6gNCkLYaLML8wtNglYPp9G5X84iuKdMCRxcide7rzRZJCty26itN3LHgKAPZCCdPZoBzr3Mq%2FVCnQuaqumrKc7ICK%2FpYcwc%2BO%2BbsemE%2FAV8nXv5QZQB6Bq8%2BImie8XnzXWJvzCxTQjAxClQwU4gUmclQho6b02SJJ8dNO2BMvGaNNT73QBTXCnHpaREukClkPk86Lx8vHVWn94DauEe24N9EBVyM4c42CebhrzQk9hBziMf8evApvkrLJglHA6ZDlndm4DFlXdeveG1jdzvdQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e5af122c.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972699&Signature=UWtDakhm3jM8msAhCj9mbjuUwWtL2oAGCdsxMkQW1n0Q9p5496NolrwcVHmJyW8vX6gNCkLYaLML8wtNglYPp9G5X84iuKdMCRxcide7rzRZJCty26itN3LHgKAPZCCdPZoBzr3Mq%2FVCnQuaqumrKc7ICK%2FpYcwc%2BO%2BbsemE%2FAV8nXv5QZQB6Bq8%2BImie8XnzXWJvzCxTQjAxClQwU4gUmclQho6b02SJJ8dNO2BMvGaNNT73QBTXCnHpaREukClkPk86Lx8vHVWn94DauEe24N9EBVyM4c42CebhrzQk9hBziMf8evApvkrLJglHA6ZDlndm4DFlXdeveG1jdzvdQ%3D%3D",
    "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/67245e5b5fcc4.jpg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761972699&Signature=iJW8d1H39ruPjHwK9Dqq7MCun%2F3atiqCweSB%2BQSu9ksYZc9iL%2FWE%2BpKpLPASfZ8459%2BUWTFoXbxK7qglZ7RKrn3vChwJWvzYoL6V%2FJPIrYtcOF0fEj%2FQIicXkSwzcQW%2FhFfHKLe025DBT1Thv5elkyrjccoUWTagBFTClj2rEl8OoCtsaGrq84LAeWriy8EKDGnIL9KVQ91S8vr9vnoKBNtUa8beaN%2B6TcNsp4gdh2eSNiJ1HxgplNj6vKnyDyqTUz3EPvpBQMiqwgq%2BR3723kOAB7UhIM2httL3qLN0fFBfVCQRaUc8WDxYV59qJUaIGMvAf9HXUR1Ow8J%2BKfaWBQ%3D%3D"
]

// Map URLs to GalleryItem structure
const galleryItems: GalleryItem[] = imageUrls.map((url, index) => ({
    src: url,
    alt: `Image ${index + 1}`,
}))

const imageSrc = "https://storage.googleapis.com/sempre-studios-893c8.appspot.com/uploads/Casa%20Turul/Suite%203/672302a36c66c.jpeg?GoogleAccessId=firebase-adminsdk-gkp49%40sempre-studios-893c8.iam.gserviceaccount.com&Expires=1761883683&Signature=ORmyurkEzmzlHwrOPLlJfLkDQIKBrElRXy%2BkxoPAyWF3gyvN34Pkn%2FXEuXpTNQW%2FJrqcqQ2J4FPl5lCUcL758tSvCYjM1U%2BtffZHDPXnP5SHtFOPlXgo2Zg0cj9pcwSrPjOnJcIhYm5JwwcAZcyzopksp4yVY1XS%2BeuHNvaaJTgTCniT9wCNhK9FYs3Gm8ZlQ68qt3X8cwFdb2DC9kP%2B6GYGWAClQgbLhxYYmThH6OxyPAOnduA2SZ%2FjsX%2B1XB52zSF%2FLk5JHL6YpE1pDEBKhHlt%2F6mlN2oujZvBja2hoaMIjj2EJkLDlTGsIyxpFLrOIO2b64s%2FpxEudhaZoWOs1A%3D%3D";

const header = { name: 'Suite 3', description: "Studio Suite with Pool, Garden & Mountain Views" };

const suiteInfo = {
    facilities: [
        { id: 1, description: "Second level suite with private entrance and spacious balcony" },
        { id: 2, description: "Queen bed with fresh linens" },
        { id: 3, description: "Full kitchen with 2-burner induction stovetop, coffee machine, mini fridge, microwave, toaster & electric kettle" },
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
        { id: 14, description: "Glass & screen windows and doors" },
        { id: 15, description: "Patio with outdoor dining area and bamboo privacy curtain" },
        { id: 16, description: "Hammock" },
        { id: 17, description: "Mosquito net" },
    ],
    bathroomAmenities: [
        { id: 1, description: "Toilet & toilet paper" },
        { id: 2, description: "Shower with complimentary shampoo, conditioner & body wash" },
        { id: 3, description: "Hairdryer*" },
        { id: 4, description: "Hand soap" },
    ],
    views: [
        { id: 1, description: "Private outdoor patio/terrace with pool, garden, and mountain views" },
    ],
};


export default function Page() {
    return (
        <div>
            <Navbar />
            <Suite_Section src={imageSrc} header={header} />
            <SuiteFacilities suiteInfo={suiteInfo} />
            <ImageGallery galleryItems={galleryItems} />
            <SuiteNavigationComponent currentSuite={3} />
            <FooterComponent />
        </div>
    );
}
