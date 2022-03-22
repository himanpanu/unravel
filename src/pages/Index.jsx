import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Blogs from '../components/Blogs';
import Businessbanner from '../components/Businessbanner';
import Category from '../components/Category';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Listing from '../components/Listing';

const Index = () => {
    let navigate = useNavigate();
    const [name, setName] = useState("");
    const [location, setLocation] = useState('');
    const [det, setDet] = useState();
    const [loc, setLoc] = useState();
    const [hidden, setHidden] = useState(true)
    const [hidden2, setHidden2] = useState(true)
  
    const bChange = async(event) => {
      setName(event.target.value)
      await fetch("https://finalexam.online/onlinebusiness/autocomplete?inputString="+event.target.value)
      .then(response => response.json())
      .then(data => {
        setDet(data.data)
      })
  
    }

    const lChange = async(event) => {
      setLocation(event.target.value)
      await fetch("https://api.geoapify.com/v1/geocode/autocomplete?text="+location+"&format=json&apiKey=aa564381aeaf4623b4277541de175243")
      .then(response => response.json())
      .then(data => {
        setLoc(data.results)
      })
  
    }
  
    useEffect(async() => {
      await fetch("https://finalexam.online/onlinebusiness/autocomplete?inputString="+name)
      .then(response => response.json())
      .then(data => {
        setDet(data.data)
      })

      await fetch("https://api.geoapify.com/v1/geocode/autocomplete?text="+location+"&format=json&apiKey=aa564381aeaf4623b4277541de175243")
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setLoc(data.results)
      })
  
    },[name])
  
    const auto = () => {
      hidden ?  document.getElementById("nlist").classList.remove("hidden") : document.getElementById("nlist").classList.add("hidden");
      setHidden(!hidden);
    }

    const auto2 = () => {
      hidden2 ?  document.getElementById("nlist2").classList.remove("hidden") : document.getElementById("nlist2").classList.add("hidden");
      setHidden2(!hidden2);
    }
  
    return (
      <div className="h-screen font-['Arial']">
      <Header/>
      {/* Cover Banner Start */}
      <section onClick={auto} style={{backgroundImage: "url(/images/Home-image.jpg)"}} className={'bg-cover bg-center h-screen'}>
        <div className='bg-zinc-600 flex flex-col h-full items-center justify-center bg-opacity-80 space-y-16'>
          <div className='text-white flex flex-col items-center space-y-6'>
            <h2 className='text-5xl font-bold'>Discover your Perfect Business Nearby!</h2>
            <h4 className='text-2xl'>Check Ratings, Rate Reviews & Buy</h4>
          </div>
          <div className='relative flex bg-white w-4/6 rounded-lg items-center justify-between' style={{'z-index': 1}}>
            <input
            id="name"
              className='rounded-sm px-3 w-3/6 py-3 rounded-l-md'
              placeholder='Search paintings,books,'
              value={name}
              onChange={bChange}
              onFocus={auto}
              onClick={() => {bChange() ; auto();}}
            />
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.89697 14.818L0.739973 20.975C0.628805 21.0814 0.540017 21.2089 0.47882 21.3501C0.417624 21.4913 0.385254 21.6433 0.383611 21.7971C0.381968 21.951 0.411085 22.1036 0.469253 22.2461C0.527421 22.3885 0.613467 22.5179 0.722337 22.6267C0.831207 22.7354 0.960707 22.8213 1.10323 22.8793C1.24576 22.9373 1.39843 22.9662 1.55229 22.9644C1.70615 22.9625 1.8581 22.93 1.9992 22.8686C2.1403 22.8072 2.26772 22.7183 2.37397 22.607L8.53097 16.45C10.3717 17.8757 12.6863 18.5466 15.0041 18.3263C17.3219 18.1059 19.4687 17.0109 21.0078 15.2639C22.5469 13.5169 23.3626 11.2492 23.289 8.92214C23.2155 6.59507 22.2582 4.38341 20.6119 2.73709C18.9656 1.09078 16.7539 0.133477 14.4268 0.0599324C12.0998 -0.0136123 9.83206 0.802125 8.08508 2.3412C6.33809 3.88027 5.24305 6.02707 5.02271 8.34486C4.80237 10.6626 5.47328 12.9773 6.89897 14.818H6.89697ZM14.135 16.078C12.7769 16.0776 11.4494 15.6745 10.3204 14.9197C9.19141 14.1649 8.31156 13.0923 7.79212 11.8375C7.27268 10.5827 7.13697 9.20203 7.40216 7.87009C7.66736 6.53816 8.32153 5.31476 9.28198 4.35459C10.2424 3.39443 11.466 2.74061 12.798 2.47581C14.13 2.211 15.5107 2.34711 16.7653 2.86691C18.02 3.38672 19.0923 4.26688 19.8468 5.39611C20.6013 6.52534 21.004 7.85293 21.004 9.211C21.004 10.113 20.8263 11.0061 20.4811 11.8394C20.1358 12.6726 19.6298 13.4297 18.992 14.0674C18.3541 14.7051 17.5968 15.2109 16.7635 15.5559C15.9301 15.9008 15.0369 16.0783 14.135 16.078V16.078Z" fill="#999999"/>
</svg>

            <div id="nlist" className="absolute left-0 top-12 bg-white px-10 rounded py-1 hidden" style={{"z-index": 500}}>
              {det && det.map(item => {
                return(<h1 onClick={()=> (setName(item))}>{item}</h1>)
              })}
            </div>
            <div className='relative w-2/5'>
            <input
            id="location"
              className='rounded-sm px-2 py-3 w-full'
              placeholder='Location'
              value={location}
              onChange={lChange}
              onFocus={auto2}
              onClick={() => {lChange() ; auto2();}}
            />
              <div id="nlist2" className="absolute top-12 bg-white px-10 rounded py-1 hidden" style={{"z-index": 500}}>
              {loc && loc.map(item => {
                return(<h1 onClick={()=> (setLocation(item.city))}>{item.city}</h1>)
              })}
            </div>
            </div>
            
            <div className='text-white bg-[#051D4D] py-3 rounded-r-md px-6 text-center self-end w-1/5'>
              <a onClick={() => navigate(`all-business/${name}/${location !=  "" ? location : "empty" }`)}>Search Here</a>
            </div>
          </div>
        </div>

        <div className='flex text-sm py-6 justify-center bg-white absolute -bottom-36 left-44 right-44 items-end text-[#444]'>
      <div className='px-16'>
      <svg width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.6909 3.07898C14.5531 3.07898 13.4619 3.53096 12.6574 4.33549C11.8529 5.14003 11.4009 6.2312 11.4009 7.36898V11.659H9.25489V7.36998C9.24428 6.51811 9.40289 5.67261 9.72154 4.8825C10.0402 4.0924 10.5125 3.37343 11.1112 2.76727C11.7098 2.16112 12.4229 1.67985 13.2089 1.35138C13.995 1.0229 14.8385 0.85376 15.6904 0.85376C16.5423 0.85376 17.3858 1.0229 18.1719 1.35138C18.9579 1.67985 19.671 2.16112 20.2696 2.76727C20.8683 3.37343 21.3406 4.0924 21.6592 4.8825C21.9779 5.67261 22.1365 6.51811 22.1259 7.36998V11.66H19.9809V7.36998C19.981 6.80653 19.8702 6.24857 19.6546 5.72796C19.4391 5.20736 19.1231 4.73432 18.7247 4.33585C18.3264 3.93738 17.8534 3.62129 17.3328 3.40564C16.8123 3.18998 16.2544 3.07898 15.6909 3.07898Z" fill="#004DDA"/>
      <path d="M5.83389 11.66C5.03587 11.6605 4.26652 11.9576 3.67519 12.4935C3.08386 13.0294 2.71275 13.7659 2.63389 14.56L0.67489 29.362C0.600572 30.1075 0.683272 30.8603 0.917658 31.5718C1.15204 32.2834 1.53292 32.938 2.03573 33.4934C2.53855 34.0487 3.15215 34.4926 3.83698 34.7964C4.52182 35.1001 5.26271 35.257 6.01189 35.257H25.3699C26.1195 35.2571 26.8609 35.1001 27.5461 34.796C28.2313 34.492 28.8452 34.0476 29.3481 33.4917C29.851 32.9357 30.2317 32.2805 30.4658 31.5684C30.6998 30.8562 30.7819 30.1029 30.7069 29.357L28.7509 14.557C28.672 13.7629 28.3009 13.0264 27.7096 12.4905C27.1183 11.9546 26.3489 11.6575 25.5509 11.657H22.1259V17.02C22.1303 17.1636 22.1058 17.3066 22.0539 17.4406C22.0019 17.5745 21.9236 17.6967 21.8236 17.7998C21.7236 17.9029 21.6039 17.9849 21.4716 18.0409C21.3393 18.0969 21.1971 18.1257 21.0534 18.1257C20.9097 18.1257 20.7675 18.0969 20.6352 18.0409C20.5029 17.9849 20.3832 17.9029 20.2832 17.7998C20.1831 17.6967 20.1049 17.5745 20.0529 17.4406C20.001 17.3066 19.9765 17.1636 19.9809 17.02V11.66H11.4009V17.023C11.4053 17.1666 11.3808 17.3096 11.3289 17.4436C11.2769 17.5775 11.1986 17.6997 11.0986 17.8028C10.9986 17.9059 10.8789 17.9879 10.7466 18.0439C10.6143 18.0999 10.4721 18.1287 10.3284 18.1287C10.1847 18.1287 10.0425 18.0999 9.91022 18.0439C9.77791 17.9879 9.6582 17.9059 9.55817 17.8028C9.45815 17.6997 9.37985 17.5775 9.32793 17.4436C9.276 17.3096 9.2515 17.1666 9.25589 17.023V11.66H5.83389Z" fill="#004DDA"/>
      </svg>
      <h1>Shop</h1>
      </div>
      <div className='px-16'>
      <svg width="44" height="28" viewBox="0 0 44 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.45712 16.3901H42.2771C42.6373 16.395 42.9814 16.5403 43.2362 16.795C43.4909 17.0498 43.6362 17.3938 43.6411 17.7541V27.3001H38.1861V21.8451H5.45712V27.3001H0.00212254V1.38907C-0.000763455 1.20956 0.0332509 1.03137 0.102057 0.865551C0.170864 0.699727 0.272996 0.549803 0.402123 0.425072C0.526854 0.295945 0.676778 0.193813 0.842602 0.125007C1.00843 0.0562002 1.18661 0.0221858 1.36612 0.0250718H4.09312C4.27179 0.0228716 4.44903 0.0572193 4.61394 0.126005C4.77886 0.194791 4.92797 0.296563 5.05212 0.425072C5.18063 0.549224 5.2824 0.698337 5.35119 0.863251C5.41998 1.02817 5.45432 1.2054 5.45212 1.38407L5.45712 16.3901ZM17.7301 9.57107C17.741 8.85298 17.6046 8.14029 17.3294 7.47693C17.0542 6.81357 16.6461 6.21362 16.1301 5.71407C15.6309 5.19773 15.031 4.78932 14.3675 4.51411C13.7041 4.2389 12.9913 4.10275 12.2731 4.11407C11.5551 4.10346 10.8424 4.23994 10.1791 4.5151C9.5158 4.79027 8.91582 5.1983 8.41612 5.71407C7.89992 6.21344 7.49161 6.81336 7.21641 7.47676C6.94121 8.14016 6.80498 8.85294 6.81612 9.57107C6.80498 10.2892 6.94121 11.002 7.21641 11.6654C7.49161 12.3288 7.89992 12.9287 8.41612 13.4281C8.9163 13.9435 9.51672 14.3512 10.1804 14.6258C10.8441 14.9005 11.557 15.0363 12.2751 15.0251C12.9933 15.0364 13.7061 14.9002 14.3695 14.625C15.033 14.3498 15.6329 13.9414 16.1321 13.4251C16.6474 12.9257 17.0549 12.3262 17.3297 11.6634C17.6046 11.0006 17.7408 10.2885 17.7301 9.57107ZM43.6411 15.0251V13.6621C43.6577 12.585 43.4533 11.5159 43.0406 10.5209C42.6278 9.52589 42.0153 8.62609 41.2411 7.87707C40.4918 7.10329 39.5919 6.49115 38.597 6.07839C37.6021 5.66563 36.5331 5.46098 35.4561 5.47707H20.4561C20.0959 5.48199 19.7518 5.62727 19.4971 5.88201C19.2423 6.13676 19.097 6.48085 19.0921 6.84107V15.0251H43.6411Z" fill="#004DDA"/>
</svg>

      <h1 className='mt-1'>Home Stays</h1>
      </div>
      <div className='px-16'>
      <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M32.0712 29.0879H15.1712L11.7002 32.0509L8.23017 29.0879H0.920166V31.1199C0.920166 33.7099 2.70917 35.8199 4.92017 35.8609C5.09813 37.0841 5.59977 38.2376 6.37317 39.2019C6.92561 39.8652 7.61985 40.396 8.40472 40.7553C9.1896 41.1146 10.0451 41.2932 10.9082 41.2779H22.0822C22.9455 41.2934 23.8012 41.1147 24.5862 40.755C25.3711 40.3953 26.0652 39.8639 26.6172 39.1999C27.3899 38.2352 27.8914 37.0819 28.0702 35.8589C28.6512 35.8373 29.2197 35.6841 29.7329 35.411C30.2462 35.1378 30.6907 34.7518 31.0332 34.2819C31.717 33.3709 32.0818 32.26 32.0712 31.1209V29.0879Z" fill="#004DDA"/>
<path d="M8.45411 26.379L11.6951 28.766L14.9681 26.38H32.0681V25.702C32.0673 24.9217 31.7973 24.1656 31.3038 23.5611C30.8103 22.9567 30.1235 22.5409 29.3591 22.384C29.3578 21.2051 29.0862 20.0421 28.5651 18.9846C28.044 17.9271 27.2872 17.0032 26.3531 16.284C24.3802 14.843 21.9819 14.1038 19.5401 14.184H13.4401C7.66511 14.184 3.75311 17.466 3.62111 22.378C2.85658 22.535 2.1696 22.9509 1.67608 23.5555C1.18257 24.1602 0.912733 24.9165 0.912109 25.697V26.375H8.45411V26.379Z" fill="#004DDA"/>
<path d="M38.7651 7.42095H32.4481L33.2031 4.40295L36.9781 3.10295L36.1321 0.647949L30.8871 2.33895L29.6601 7.42095H17.1731V10.1299H18.7601L18.9181 11.4839H19.5481C22.5919 11.4008 25.5758 12.3401 28.0231 14.1519C29.2685 15.1114 30.2782 16.3427 30.9751 17.7519C31.4044 18.6267 31.71 19.557 31.8831 20.5159C33.1435 21.2933 34.0781 22.5026 34.5125 23.9183C34.9469 25.334 34.8515 26.8594 34.2441 28.2099C34.6012 29.139 34.7846 30.1257 34.7851 31.1209C34.7993 32.9732 34.1574 34.7707 32.9731 36.195C32.2503 37.0562 31.3245 37.724 30.2791 38.138C29.9226 39.1532 29.3917 40.0984 28.7101 40.931C28.6101 41.0509 28.5101 41.169 28.4031 41.283H34.7851C35.0557 41.3119 35.3294 41.2828 35.5879 41.1975C35.8463 41.1123 36.0836 40.9728 36.2839 40.7886C36.4842 40.6043 36.6429 40.3794 36.7493 40.1289C36.8557 39.8784 36.9075 39.608 36.9011 39.3359L39.9821 10.1359H41.5481V7.42095H38.7651Z" fill="#004DDA"/>
</svg>

      <h1>Restaurants</h1>
      </div>
      <div className='px-16'>
      <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2171 31.2909C13.2171 34.1109 10.3581 36.3959 6.8361 36.3959C3.3141 36.3959 0.454102 34.1119 0.454102 31.2909C0.454102 28.4699 3.3131 26.1859 6.8351 26.1859C10.3571 26.1859 13.2171 28.4729 13.2171 31.2909ZM36.1901 26.1859C36.1901 29.0059 33.3311 31.2909 29.8091 31.2909C26.2871 31.2909 23.4281 29.0059 23.4281 26.1859C23.4281 23.3659 26.2861 21.0809 29.8041 21.0809C33.3221 21.0809 36.1901 23.3659 36.1901 26.1859Z" fill="#004DDA"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M33.6371 26.186V3.21301H36.1901V26.186H33.6371ZM13.2141 5.76601V31.291H10.6641V5.76601H13.2141Z" fill="#004DDA"/>
<path d="M10.6641 5.52297C10.6642 4.88974 10.8996 4.27916 11.3246 3.80978C11.7497 3.3404 12.334 3.04572 12.9641 2.98297L33.3821 0.941966C33.737 0.906333 34.0955 0.94549 34.4344 1.05691C34.7733 1.16833 35.0851 1.34955 35.3497 1.58887C35.6143 1.82819 35.8257 2.1203 35.9705 2.44636C36.1152 2.77243 36.19 3.12522 36.1901 3.48197V5.76497L10.6641 8.31797V5.52297Z" fill="#004DDA"/>
</svg>

      <h1>Music</h1>
      </div>
      <div className='px-16'>
      <svg width="37" height="10" viewBox="0 0 37 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.487 0.22998C17.6105 0.22998 16.7536 0.489912 16.0247 0.976907C15.2959 1.4639 14.7278 2.15609 14.3924 2.96593C14.057 3.77577 13.9692 4.6669 14.1402 5.52662C14.3112 6.38634 14.7333 7.17605 15.3531 7.79588C15.973 8.4157 16.7627 8.83781 17.6224 9.00882C18.4821 9.17983 19.3732 9.09206 20.1831 8.75661C20.9929 8.42117 21.6851 7.85311 22.1721 7.12427C22.6591 6.39543 22.919 5.53855 22.919 4.66198C22.9156 3.4876 22.4476 2.36229 21.6171 1.53187C20.7867 0.701453 19.6614 0.23341 18.487 0.22998ZM31.787 0.22998C30.9105 0.22998 30.0536 0.489912 29.3247 0.976907C28.5959 1.4639 28.0278 2.15609 27.6924 2.96593C27.357 3.77577 27.2692 4.6669 27.4402 5.52662C27.6112 6.38634 28.0333 7.17605 28.6531 7.79588C29.273 8.4157 30.0627 8.83781 30.9224 9.00882C31.7821 9.17983 32.6732 9.09206 33.4831 8.75661C34.2929 8.42117 34.9851 7.85311 35.4721 7.12427C35.9591 6.39543 36.219 5.53855 36.219 4.66198C36.2156 3.48708 35.7471 2.36132 34.9161 1.53082C34.085 0.700313 32.9589 0.232619 31.784 0.22998H31.787ZM5.19104 0.22998C4.31447 0.22998 3.45759 0.489912 2.72875 0.976907C1.99991 1.4639 1.43185 2.15609 1.0964 2.96593C0.760954 3.77577 0.673185 4.6669 0.844195 5.52662C1.0152 6.38634 1.43731 7.17605 2.05714 7.79588C2.67696 8.4157 3.46667 8.83781 4.3264 9.00882C5.18612 9.17983 6.07725 9.09206 6.88709 8.75661C7.69693 8.42117 8.38911 7.85311 8.87611 7.12427C9.3631 6.39543 9.62304 5.53855 9.62304 4.66198C9.61961 3.4876 9.15156 2.36229 8.32114 1.53187C7.49073 0.701453 6.36542 0.23341 5.19104 0.22998Z" fill="#004DDA"/>
</svg>

      <h1 className='mt-4'>More</h1>
      </div>
    </div>
    </section>
    
      <Businessbanner/>
      <Blogs/>
      <Listing/>
      <Category/>
      <Footer/>
      </div>)
}

export default Index