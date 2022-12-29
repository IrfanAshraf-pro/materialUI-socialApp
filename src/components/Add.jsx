import {
  Stack,
  Fab,
  Modal,
  Tooltip,
  Typography,
  Box,
  styled,
  Avatar,
  TextField,
  ButtonGroup,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
  DateRangeOutlined,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});
const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%-25px)", sm: 20 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={260}
          bgcolor="background.default"
          color="text.primary"
          p={2}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Travis Howard"
              src="https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=400"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontweight={500} component="span">
              John Doe
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="user-input"
            multiline
            rows={3}
            defaultValue="Whats on your mind?"
            variant="standard"
          />
          <Stack direction="row" spacing={2} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            fullWidth
            aria-label="add-post-button"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeOutlined />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
