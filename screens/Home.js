import React from "react";
import { View, Text } from "react-native";
import Paragraph from "../components/Paragraph";
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import TimerInside from "../components/TimerInside";
import GuidingButton from "../components/GuidingButton";
import TopHeaderReading from "../components/TopHeaderReading";

export default function Home() {
    const str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus ornare suspendisse sed nisi lacus sed viverra. Aliquam sem fringilla ut morbi tincidunt augue interdum. Nec ultrices dui sapien eget mi proin sed libero enim. Enim eu turpis egestas pretium aenean pharetra magna ac. Dis parturient montes nascetur ridiculus mus. Malesuada pellentesque elit eget gravida cum sociis natoque. Aenean pharetra magna ac placerat. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Turpis tincidunt id aliquet risus feugiat. A condimentum vitae sapien pellentesque habitant morbi tristique senectus et. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. Id faucibus nisl tincidunt eget. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Tortor id aliquet lectus proin nibh. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium.

    Purus non enim praesent elementum facilisis leo. Morbi non arcu risus quis. Volutpat est velit egestas dui id ornare arcu odio ut. Aliquet nec ullamcorper sit amet risus nullam eget. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Consequat semper viverra nam libero justo laoreet sit. Quis vel eros donec ac. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. Pulvinar etiam non quam lacus suspendisse faucibus interdum. Dignissim convallis aenean et tortor at risus viverra adipiscing. Est lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Molestie a iaculis at erat pellentesque adipiscing commodo. Consectetur adipiscing elit ut aliquam purus sit. Aliquet bibendum enim facilisis gravida. Libero justo laoreet sit amet cursus sit. Vel orci porta non pulvinar neque. Tristique et egestas quis ipsum. Cursus euismod quis viverra nibh cras pulvinar. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis.
    
    Tristique nulla aliquet enim tortor at auctor urna. Diam in arcu cursus euismod quis. Magna fringilla urna porttitor rhoncus dolor purus non. Tincidunt dui ut ornare lectus sit amet est placerat. Pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Et malesuada fames ac turpis egestas sed tempus urna et. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Nisi porta lorem mollis aliquam. Turpis egestas maecenas pharetra convallis posuere. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Lorem donec massa sapien faucibus et. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Adipiscing elit pellentesque habitant morbi tristique. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Duis ultricies lacus sed turpis tincidunt. Facilisis sed odio morbi quis commodo odio aenean sed adipiscing. Eget aliquet nibh praesent tristique magna.
    
    Faucibus ornare suspendisse sed nisi lacus sed. Ornare quam viverra orci sagittis eu volutpat. A erat nam at lectus. Vel quam elementum pulvinar etiam non quam. Et ultrices neque ornare aenean. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Eu mi bibendum neque egestas congue quisque egestas diam. Donec massa sapien faucibus et molestie. A arcu cursus vitae congue mauris rhoncus aenean vel. Semper viverra nam libero justo. Cras sed felis eget velit aliquet sagittis id consectetur purus. Odio eu feugiat pretium nibh ipsum consequat nisl vel pretium.
    
    Dictumst quisque sagittis purus sit amet volutpat consequat. Amet commodo nulla facilisi nullam vehicula. Eros in cursus turpis massa. Et sollicitudin ac orci phasellus egestas tellus rutrum. Porta lorem mollis aliquam ut porttitor leo. Tristique nulla aliquet enim tortor. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Iaculis eu non diam phasellus. Tempus urna et pharetra pharetra massa massa ultricies. Consequat nisl vel pretium lectus. Diam volutpat commodo sed egestas egestas fringilla phasellus.`
    
    const [isPlayingTimer, setIsPlayingTimer] = React.useState(true);

    const handleToggle = () => {
        setIsPlayingTimer(!isPlayingTimer);
    }
    const styles = {
        header: {
            fontSize: 40,
            fontWeight: "bold",
            textAlign:"center",
            marginBottom: 20,
            fontFamily: "Agright"
        },
    }
    return (
        <View
        style={{
            flex: 1,

            alignItems: "center",
            paddingHorizontal:20
        }}
        >
            <View style={{marginBottom: 20}}>
        <TopHeaderReading/>
        </View>
        <CountdownCircleTimer
    isPlaying={isPlayingTimer}
    duration={120}
    size={200}
    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => <TimerInside remainingTime={remainingTime} handleToggle={handleToggle} pauseState={isPlayingTimer}></TimerInside>}
  </CountdownCircleTimer>
  <View style={{marginTop: 20}}>
        <Paragraph pText={str}></Paragraph>
    </View>
        <View style={{position: "absolute", bottom: 10}}>
        <GuidingButton title="Finished Reading"></GuidingButton>
        </View>
        </View>
    );
}