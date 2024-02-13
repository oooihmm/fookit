import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Grid,
} from "@mui/material";
import axios from "axios";

interface Props {
  onSelectChange: (province: string, district: string, town: string) => void;
}

interface IaddrData {
  cd: string;
  addr_name: string;
  full_addr: string;
  x_coor: string;
  y_coor: string;
}

const SelectBox: React.FC<Props> = ({ onSelectChange }) => {
  const [provinceAddr, setProvinceAddr] = useState<IaddrData[] | null>(null);
  const [districtAddr, setDistrictAddr] = useState<IaddrData[] | null>(null);
  const [townAddr, setTownAddr] = useState<IaddrData[] | null>(null);
  const [cd, setCd] = useState<string | null>(null);

  const [accessToken, setAccessToken] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const [selectedProvince, setSelectedProvince] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedTown, setSelectedTown] = useState<string>("");

  // api 사용 위한 사용자 인증
  const CONSUMER_KEY = "e98a5e1d56004e57bbed";
  const CONSUMER_SECRET = "ab556e4554ec4e18919c";

  const API_ADDR = "https://sgisapi.kostat.go.kr/OpenAPI3/addr/stage.json";

  // 인증 토큰 발급
  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const response = await axios.get(
          "https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json",
          {
            params: {
              consumer_key: CONSUMER_KEY,
              consumer_secret: CONSUMER_SECRET,
            },
          }
        );
        setAccessToken(response.data.result.accessToken);
      } catch (error) {
        console.log("getAccessToken error", error);
      }
    };

    // getAccessToken();

    if (!accessToken) {
      setIsLoading(true);
      getAccessToken();
      setIsLoading(false);
    }
  }, []);

  // 토큰을 이용한 api get
  useEffect(() => {
    const handleAddr = async () => {
      if (!accessToken) {
        return;
      }
      if (cd != undefined && cd?.length > 5) {
        // 읍면동 이후의 search는 없음
        return;
      }

      try {
        setIsLoading(true);

        const response = await axios.get(API_ADDR, {
          params: {
            accessToken: accessToken,
            cd: cd,
          },
        });

        let firstData = response.data.result[0].full_addr.split(" ");

        if (firstData.length === 1) {
          setProvinceAddr(response.data.result);
        } else if (firstData.length === 2) {
          setDistrictAddr(response.data.result);
        } else if (firstData.length === 3) {
          setTownAddr(response.data.result);
        } else {
          console.log("error");
        }
      } catch (e) {
        console.log("getAddr error", e);
      } finally {
        setIsLoading(false);
      }
    };

    handleAddr();
  }, [accessToken, cd]);

  const handleProvinceChange = (e: SelectChangeEvent): void => {
    const province = e.target.value;
    const curSelectedProvince = provinceAddr
      ? provinceAddr.find((target) => target.addr_name === province)
      : null;

    const key = curSelectedProvince ? curSelectedProvince.cd : null;

    setSelectedProvince(province);
    setSelectedDistrict("");
    setSelectedTown("");
    setCd(key);
    onSelectChange(province, "", "");
  };

  const handleDistrictChange = (e: SelectChangeEvent): void => {
    const district = e.target.value as string;
    const curSelectedDistrict = districtAddr
      ? districtAddr.find((target) => target.addr_name === district)
      : null;

    const key = curSelectedDistrict ? curSelectedDistrict.cd : null;

    setSelectedDistrict(district);
    setSelectedTown("");
    setCd(key);
    onSelectChange(selectedProvince, district, "");
  };

  const handleTownChange = (e: SelectChangeEvent): void => {
    const town = e.target.value as string;
    const curSelectedTown = townAddr
      ? townAddr.find((target) => target.addr_name === town)
      : null;

    const key = curSelectedTown ? curSelectedTown.cd : null;

    setSelectedTown(town);
    setCd(key);
    onSelectChange(selectedProvince, selectedDistrict, town);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel htmlFor="province">시도 선택:</InputLabel>
          <Select
            id="province"
            value={selectedProvince ? selectedProvince : ""}
            label="시도 선택"
            onChange={handleProvinceChange}
          >
            <MenuItem value="">시도를 선택하세요</MenuItem>
            {provinceAddr &&
              provinceAddr.map((provinceAddr) => (
                <MenuItem key={provinceAddr.cd} value={provinceAddr.addr_name}>
                  {provinceAddr.addr_name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel htmlFor="district">시군구 선택:</InputLabel>
          <Select
            id="district"
            value={selectedDistrict ? selectedDistrict : ""}
            label="시군구 선택"
            onChange={handleDistrictChange}
          >
            <MenuItem value="">시군구를 선택하세요</MenuItem>
            {districtAddr &&
              districtAddr &&
              districtAddr.map((districtAddr) => (
                <MenuItem key={districtAddr.cd} value={districtAddr.addr_name}>
                  {districtAddr.addr_name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel htmlFor="district">시군구 선택:</InputLabel>
          <Select
            id="town"
            value={selectedTown ? selectedTown : ""}
            label="읍면동 선택"
            onChange={handleTownChange}
          >
            <MenuItem value="">읍면동을 선택하세요</MenuItem>
            {townAddr &&
              townAddr &&
              townAddr.map((townAddr) => (
                <MenuItem key={townAddr.cd} value={townAddr.addr_name}>
                  {townAddr.addr_name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default SelectBox;
