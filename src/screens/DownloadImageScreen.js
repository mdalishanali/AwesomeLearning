import {
  View,
  Text,
  PermissionsAndroid,
  Alert,
  TouchableOpacity,
  Platform,
  Image,
} from "react-native";
import React from "react";
import RNFetchBlob from "rn-fetch-blob";

export default function DownloadImageScreen() {
  const url =
    "https://images.pexels.com/photos/15045093/pexels-photo-15045093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const checkPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Storage Permission Required",
          message: "App needs access to your storage to download Photos",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        downloadAnything();
      } else {
        Alert.alert("Storage Permission Not Granted");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const downloadAnything = () => {
    const { fs, config } = RNFetchBlob;
    const fileDir = fs.dirs.PictureDir;
    config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: fileDir + "/alishan_" + "aaa" + ".jpeg",
        description: "file dowl",
      },
    })
      .fetch(
        "GET",
        "https://cdn.pixabay.com/photo/2023/01/08/18/42/road-7705906_960_720.jpg",
        {
          //some headers ..
        }
      )
      .then((res) => {
        console.log("res: ", "file://" + res.path());
        Alert.alert("file downloaded...");
        console.log("The file saved to ", res.path());
      });
  };

  return (
    <View>
      <TouchableOpacity onPress={checkPermission}>
        {/* <Image
          source={{
            uri: "file:///storage/emulated/0/Pictures/alishan_aaa.jpeg",
            width: 200,
            height: 200,
          }}
        /> */}
        <Text>DownloadImageScreen</Text>
        <Text>DownloadImageScreen</Text>
        <Text>DownloadImageScreen</Text>
      </TouchableOpacity>
    </View>
  );
}
