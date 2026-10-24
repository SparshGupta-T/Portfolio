# RecycleNet — Website Copy (Rewritten)

Same structure, same fields, only the "New:" lines filled in. I left a few items unchanged where noted — mostly short functional labels, gallery alt-text, and things that are already precise technical terms rather than prose.

**What I did differently here vs the other case studies:** this one is a real technical project with real published numbers, so I kept every metric exact (2,420 images, 8,884 bounding boxes, 2.0 ms, 62.0% mAP@50, etc.) and didn't touch any of them. What I rewrote was the tone around the numbers — the original reads like vendor marketing copy ("blistering," "cost-prohibitive," "ultra-lightweight champion"), which doesn't match how an engineer actually describes their own benchmark results. I switched it to first person where it reads naturally, and cut the hype adjectives so the numbers do the talking.

---

## 1. Homepage — Interactive Hero Switcher

### Tab Label
No change — `RecycleNet` is the project name.

### Floating Tap Badge
No change — `Explore Case Study ↗` matches the badge used on your other project cards.

---

## 2. Homepage — Featured Projects Card

### Category Pill
No change — `Deep Learning · Computer Vision & Edge AI` is accurate and functions as a tag, not prose.

### Main Project Title
No change — `RecycleNet`.

### Subtitle / Tagline
No change — this is your actual IEEE paper title, so it should stay exact rather than get "naturalized."

### Role & IEEE Recognition Badge
No change — `Lead Researcher & Embedded Systems Developer · Published in IEEE ICCECE 2026` is a factual role tag.

### Project Overview Paragraph
**New:**
Most recycling facilities sort plastics with near-infrared spectrometers, which are expensive, or by hand, which is slow and exposes workers to contaminants. I built RecycleNet to do it with a regular camera instead — edge deep learning models (YOLO26 and RF-DETR) that classify all 6 resin codes (PET, HDPE, PVC, LDPE, PP, PS) from a standard video feed, running fully offline on edge hardware at 2.0 ms latency.

### 4 Key Highlight Pillars

**Pillar 1**
- Title: `2.0 ms Edge Latency` (unchanged — it's the headline stat)
- New Description: Runs in real time on ordinary edge hardware, no specialized chips needed.

**Pillar 2**
- Title: `2,420 Dataset Split` (unchanged)
- New Description: 2,420 images shot from multiple angles, annotated and augmented in Roboflow.

**Pillar 3**
- Title: `6 Resin Classes` (unchanged)
- New Description: Tells apart all six standard resin codes: PET, HDPE, PVC, LDPE, PP, and PS.

**Pillar 4**
- Title: `Published IEEE Conference Paper` (unchanged)
- New Description: Lead author, presented at IEEE ICCECE 2026.

### Action CTA Buttons
No change — functional buttons.

---

## 3. Dedicated Case Study Page

### Meta Description
**New:**
RecycleNet case study: an edge AI system Sparsh Gupta built to identify plastic resin types in real time, benchmarking YOLO26 against RF-DETR, with a Flask desktop pipeline and an offline Android app running PyTorch Lite. Published in IEEE ICCECE 2026.

### Case Study Header
- Domain Tag: no change.
- Project Title: no change.
- Headline / Tagline: no change — same reasoning as the homepage subtitle, this is the actual paper title.

### Main Hero Narrative
**New:**
RecycleNet is an edge computer vision system I built to identify plastic resin types in real time, covering all 6 standard Resin Identification Codes: PET, HDPE, PVC, LDPE, PP, and PS. I collected and labeled a custom dataset of 2,420 images into 8,884 bounding boxes, then benchmarked it against YOLO26n and RF-DETR — YOLO26n ran at 2.0 ms inference, RF-DETR hit 62.0% mAP@50. There's a multi-threaded Flask and OpenCV desktop pipeline for live inference, and a fully offline Android app in Kotlin and Jetpack Compose running PyTorch Lite. Published in IEEE ICCECE 2026.

### Metadata Strip (4 Metrics Boxes)
No change on any of the four — these are stat labels, not prose, and are already as clean as they can be:
1. `Lead Researcher & Systems Developer`
2. `Published in IEEE ICCECE 2026`
3. `2.0 ms Edge Latency · 62.0% mAP@50`
4. `PyTorch, YOLO26, RF-DETR, OpenCV, Flask, Kotlin, CameraX`

---

### Core Engineering Pillars (Section 1)

- Section Heading: no change.
- **New Section Subtitle:** How the system sorts in real time on regular hardware and phones, with nothing running in the cloud.

**Pillar 1 — `Custom Dataset & 6 Resin Codes`**
New Description: Shot and labeled 2,420 images from multiple angles myself, annotated into 8,884 bounding boxes in Roboflow, across the 6 standard polymer codes: PET, HDPE, PVC, LDPE, PP, and PS.

**Pillar 2 — `2.0 ms Inference Loop (YOLO26n)`**
New Description: Benchmarked YOLO26n, YOLOv8s, YOLO26m, and RF-DETR on dual Nvidia T4 GPUs. YOLO26n came out fastest — 2.0 ms per frame, with 58.6% mAP@50.

**Pillar 3 — `Desktop OpenCV & Flask Pipeline`**
New Description: A multi-threaded Flask server paired with an async OpenCV video loop, running on either Apple Silicon (MPS) or Nvidia CUDA.

**Pillar 4 — `Offline Native Android (PyTorch Lite)`**
New Description: Built natively in Kotlin with Jetpack Compose and Material 3, using CameraX for live frame capture and PyTorch Lite models that run entirely on-device — no cloud connection needed.

---

### Deep Dive: Unified Product Narrative (Section 2)

#### Block 1 — The Challenge
Title: no change.

**New Lead Text:** Plastic waste is piling up faster than recovery facilities can sort it, and sorting is the real bottleneck. The usual methods force a bad trade-off:

- **New Bullet 1 (Manual Labor):** Manual sorting: inconsistent, error-prone, and exposes workers to chemical runoff and contaminants on the conveyor line.
- **New Bullet 2 (NIR Spectrometry):** Near-infrared spectrometry: accurate, but each sensor costs tens of thousands of dollars, which limits it to large centralized plants.
- **New Bullet 3 (The RecycleNet Alternative):** What RecycleNet does instead: uses a regular camera and an edge neural network to classify polymers and draw bounding boxes directly at the sorting line — no specialized sensor required.

#### Block 2 — Model Benchmarking
Title: no change.

**New Lead Text:** To weigh speed against accuracy, I benchmarked four vision architectures on parallel Nvidia T4 GPUs:

- **New Bullet 1 (YOLO26n):** YOLO26n, the lightweight option: 2.38M parameters, 2.0 ms inference, 58.6% mAP@50 — fast enough for conveyor belts and mobile devices.
- **New Bullet 2 (RF-DETR):** RF-DETR, the most accurate: 0.740 precision, 0.591 recall, 62.0% mAP@50, at 14.8 ms per frame.
- **New Bullet 3 (Progress Over Baseline):** Compared to the baseline: against previously published YOLOv8 results, precision went from 57.4% to 72.3%, recall from 45.5% to 54.2%, and mAP@50 from 46.5% to 58.6%.
- **New Bullet 4 (Class-Wise Discrimination):** By class: the confusion matrix showed strong separation for PET (81%) and LDPE (75%), and YOLO26n had fewer false positives on the background than the larger models.

#### Block 3 — Dual Deployment Architecture
Title: no change.

**New Lead Text:** To get this out of a notebook and into something usable on a real sorting line, I built two deployment paths:

- **New Bullet 1 (Desktop OpenCV / Flask):** Desktop, with OpenCV and Flask: captures frames with cv2.VideoCapture, runs inference on Apple Silicon MPS or Nvidia CUDA, and streams the live result to an HTML5 dashboard.
- **New Bullet 2 (Native Android App):** Native Android app, in Kotlin: built with Jetpack Compose and Material 3. Uses CameraX for continuous frame analysis and runs quantized PyTorch Lite models fully on-device, no cloud needed.
- **New Bullet 3 (Operational Modes):** Two modes on the app: Live Scan, which runs the camera feed in real time with confidence thresholding and NMS bounding boxes, and Gallery Mode, for analyzing a single static image.

#### Block 4 — IEEE Publication & Future Hardware Scope
Title: no change.

**New Body Text:** Published in the Proceedings of the 2026 IEEE International Conference on Computing, Electronics & Communications Engineering (ICCECE). Next step is connecting the detection output to Arduino and Raspberry Pi microcontrollers, to actually trigger pneumatic air nozzles and deflector arms — turning this into a working, low-cost sorting machine instead of just a detection model.

---

### High-Resolution Screen Gallery Captions

No changes here. These function as alt-text and SEO descriptions for each image — they're already specific and literal (model names, confidence percentages, exact screen names), which is what you want for that purpose. Making them sound more "natural" would make them less useful as descriptions and wouldn't be noticed by anyone reading the page normally. If you want a lighter touch on the card subtitles specifically (the short ones, not the long captions), let me know and I'll take a pass on just those.
