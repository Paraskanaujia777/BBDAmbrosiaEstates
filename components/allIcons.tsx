import { Building, Cable, Cctv, Lock, SquareParking, Trees } from "lucide-react";

function AllIcons (){

    return (
        <div className="m-20">

          <div className="">
            <h1 className="font-bold text-4xl text-center mb-3 text-[#487800]">BBD Ambrosia Estate - Amenities</h1>
            <h3 className=" text-3xl text-center text-[#487800]">Here are the some amenities listing of bbd ambrosia estate</h3>

          </div >


          <div className="flex flex-row gap-20 justify-center m-8  p-4">

            <div>
              <Building className="" size={64} />
              <span className="">Prime Location</span>
            </div>
            <div>
              <Cctv className="" size={64} />
              <span>Security CCTV</span>
            </div>
            <div>
              <Trees className="" size={64} />
              <span>Kids Play one</span>
            </div>
            <div>
              <SquareParking className="" size={64} />
              <span>Parking</span>
            </div>
            <div>
              <Lock className="" size={64} />
              <span>24 HR Security</span>
            </div>
            <div>
              <Cable className="" size={64}  />
              <span>Power Backup</span>
            </div>


          </div>

        </div>
    )
}

export default AllIcons;