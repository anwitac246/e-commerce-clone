export const Bmarket = () =>{
    const marketingData = [
        {
          id: 1,
          imgSrc: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Skin_Analyser.png?crop=center&height=840&v=1712744046&width=840",
          title: "Try Our Skin Analyser",
          description: "Provides personalized skincare recommendations",
          buttonText: "Show More",
        },
        {
          id: 2,
          imgSrc: "https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/beminimalist.co/cdn/shop/files/Purple_Modern_Download_App_Instagram_Post_1.png?crop=center&height=840&v=1706874639&width=840",
          title: "Download Our App",
          description: "Get App Exclusive Discounts & Offers",
          buttonText: "Show More",
        }
      ];
    return(
        <div className="marketing-container">
      {marketingData.map((item) => (
        <div key={item.id} className="marketing-item">
          <img src={item.imgSrc} alt={item.title} />
          <div className="marketing-info">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.buttonText}</button>
          </div>
        </div>
      ))}
    </div>
    );
}