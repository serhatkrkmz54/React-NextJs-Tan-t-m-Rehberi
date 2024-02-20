import InnerPageContainer from "@/components/common/InnerPageContainer";
import PageMetaTags from "@/containers/PageMetaTags";

export default function Page() {
    return (
      <InnerPageContainer title="Hakkımızda">
            <PageMetaTags title="About Us" description={"Meta tags"} url="/about-us"/>
            <p className="mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet facilisis odio, nec cursus metus condimentum vel. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula auctor turpis vitae elementum. Donec vitae lobortis orci. Praesent efficitur enim vel lorem tempus, sed placerat eros accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer tempus erat sit amet interdum finibus. Fusce dolor tellus, pharetra eu eros ut, rutrum accumsan nunc. Nam imperdiet, odio vel suscipit volutpat, mi mauris varius ipsum, euismod suscipit sapien orci vitae magna.
            </p>

            <h3 className="mt-8 font-bold text-xl">Kendimi Tanıtayım!</h3>
            <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet facilisis odio, nec cursus metus condimentum vel. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula auctor turpis vitae elementum. Donec vitae lobortis orci. Praesent efficitur enim vel lorem tempus, sed placerat eros accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer tempus erat sit amet interdum finibus. Fusce dolor tellus, pharetra eu eros ut, rutrum accumsan nunc. Nam imperdiet, odio vel suscipit volutpat, mi mauris varius ipsum, euismod suscipit sapien orci vitae magna.
            </p>
      </InnerPageContainer>
    )
  }
  