import { Image } from "@mui/icons-material"
import { Box, Chip, Divider, Paper, SxProps, Typography } from "@mui/material"
import { ReactElement } from "react"
import { CCLicense } from "./CCLicense"

export interface CCInfo {
  owner: string
  license: string
  imgLink: string
  imgName: string
}

export function Photograph({
  children,
  sx,
  link = process.env.PUBLIC_URL + "/VQE-no-image-found.jpg",
  footerInfo: { owner, license, imgLink, imgName } = {
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
  return (
    <>
      <Paper elevation={3} sx={{ ...sx, paddingBottom: 2 }}>
        <img
          src={link}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            marginBottom: "-25px",
            position: "relative",
            zIndex: 1,
          }}
        />
        <Divider textAlign="left">
          <Chip
            label="Original Image Information"
            sx={{
              position: "relative",
              zIndex: 2,
              backgroundColor: "#E0E0E0",
            }}
          />
        </Divider>
        <Box
          sx={{
            display: "flex",
            flexDirection: "horizontal",
            padding: 2,
            gap: 2,
          }}
        >
          <Typography>{imgName}</Typography>
          <Divider orientation="vertical" flexItem sx={{ flexGrow: 1 }} />
          <Typography>{owner}</Typography>
          <Divider orientation="vertical" flexItem sx={{ flexGrow: 1 }} />
          <Typography>URL: {imgLink}</Typography>
          <Divider orientation="vertical" flexItem sx={{ flexGrow: 1 }} />
          <Typography>
            <CCLicense license={license} />
          </Typography>
        </Box>
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
