import { Image } from "@mui/icons-material"
import {
  Box,
  Button,
  Chip,
  Divider,
  Link,
  Paper,
  SxProps,
  ToggleButton,
  Typography,
} from "@mui/material"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { ReactElement } from "react"
import { CCLicense, CCLicenseTypes } from "./CCLicense"
import React from "react"

export interface CCInfo {
  owner: string
  ownerLink?: string
  license: CCLicenseTypes
  imgLink: string
  imgName: string
}

export function Photograph({
  children,
  sx,
  link = process.env.PUBLIC_URL + "/VQE-no-image-found.jpg",
  footerInfo: { owner, license, imgLink, imgName, ownerLink } = {
    owner: "Bob",
    license: "0",
    imgLink: "No link Found",
    imgName: "No Image Name Found",
  },
  alt,
}: {
  children?: ReactElement
  sx?: SxProps
  link: string
  footerInfo?: CCInfo
  alt?: string
}) {
  const [selected, setSelected] = React.useState(false)
  return (
    <>
      <Paper elevation={3} sx={{ ...sx }}>
        <img
          src={link}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            marginBottom: selected ? "-30px" : "-55px",
            position: "relative",
            zIndex: 1,
          }}
        />
        <Divider textAlign="left">
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              background: "white",
              borderRadius: 1,
            }}
          >
            <ToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                setSelected(!selected)
              }}
              sx={{
                position: "relative",
                zIndex: 2,
                background: "white",
              }}
            >
              Original Image Information
              {selected ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </ToggleButton>
          </Box>
        </Divider>
        {selected ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: "horizontal",
              gap: 2,
            }}
          >
            <Typography sx={{ padding: 2, flexGrow: 4 }}>
              <Link href={imgLink} underline="always">
                {imgName}
              </Link>
            </Typography>
            <Divider orientation="vertical" flexItem />
            <Typography sx={{ padding: 2, flexGrow: 4 }}>
              {ownerLink ? (
                <Link href={ownerLink} underline="always">
                  {owner}
                </Link>
              ) : (
                owner
              )}
            </Typography>
            <Box sx={{ marginTop: "-25px", flexGrow: 1, height: "82px" }}>
              <CCLicense
                license={license}
                sx={{
                  height: "100%",
                  width: "100%",
                  //objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </Box>
          </Box>
        ) : (
          <></>
        )}
        {children ? (
          <>
            <Divider />
            <Box>{children}</Box>
          </>
        ) : (
          <></>
        )}
      </Paper>
    </>
  )
}
