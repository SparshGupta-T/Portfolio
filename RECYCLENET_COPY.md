# RecycleNet — Website Copy & Content Reference

Use this document to review, edit, or completely rewrite any text for the **RecycleNet** project.
When you are happy with the copy, send this file back (or paste the updated sections), and each update will be applied seamlessly across the portfolio.

---

## 1. Homepage — Interactive Hero Switcher (`index.html` & `main.js`)

### Tab Label
- **Current Tab Text**: `RecycleNet`
- **New Tab Text**: 

### Floating Tap Badge on Phone Shell
- **Current Badge**: `Explore Case Study ↗`
- **New Badge**: 

---

## 2. Homepage — Featured Projects Card (`index.html`)

### Category Pill
- **Current Category**: `Deep Learning · Computer Vision & Edge AI`
- **New Category**: 

### Main Project Title
- **Current Title**: `RecycleNet`
- **New Title**: 

### Subtitle / Tagline
- **Current Subtitle**: `Deep Learning-Assisted Dynamic Plastic Identification Technique For Automated Waste Segregation`
- **New Subtitle**: 

### Role & IEEE Recognition Badge
- **Current Role**: `Lead Researcher & Embedded Systems Developer · Published in IEEE ICCECE 2026`
- **New Role**: 

### Project Overview Paragraph
- **Current Overview**:
> Industrial recycling facilities currently rely on expensive Near-Infrared (NIR) spectrometers or hazardous manual hand-picking to sort plastics. RecycleNet replaces cost-prohibitive sensor rigs with edge deep learning computer vision (YOLO26 and RF-DETR). The system classifies all 6 resin identification codes (PET, HDPE, PVC, LDPE, PP, PS) from standard consumer video streams in 2.0 ms edge latency, running entirely offline on edge hardware.
- **New Overview**:


### 4 Key Highlight Pillars (Pillars on Card Left Column)
- **Pillar 1**:
  - **Badge Number**: `1`
  - **Title**: `2.0 ms Edge Latency`
  - **Description**: `Ultra-fast inference on commodity edge compute`
  - **New Title / Description**:

- **Pillar 2**:
  - **Badge Number**: `2`
  - **Title**: `2,420 Dataset Split`
  - **Description**: `Robust multi-angle annotations with Roboflow augmentations`
  - **New Title / Description**:

- **Pillar 3**:
  - **Badge Number**: `3`
  - **Title**: `6 Resin Classes`
  - **Description**: `Distinguishes PET, HDPE, PVC, LDPE, PP & PS`
  - **New Title / Description**:

- **Pillar 4**:
  - **Badge Number**: `4`
  - **Title**: `Published IEEE Conference Paper`
  - **Description**: `Lead author in IEEE ICCECE 2026`
  - **New Title / Description**:

### Action CTA Buttons
- **Button 1**: `View Case Study ↗` (Links to `./recyclenet.html`)
- **Button 2**: `IEEE Paper ↗` (Links to IEEE Xplore: `https://ieeexplore.ieee.org/abstract/document/11493068`)

---

## 3. Dedicated Case Study Page (`recyclenet.html`)

### Page Metadata & SEO
- **Browser Title**: `RecycleNet Case Study | Sparsh Gupta`
- **Meta Description**: `RecycleNet case study: a deep learning-assisted plastic resin identification system by Sparsh Gupta. Edge AI benchmarking with YOLO26 and RF-DETR, Flask desktop streaming, and an offline Android app with PyTorch Lite. Published in IEEE ICCECE 2026.`
- **New Meta Description**: 

### Case Study Header
- **Domain Tag**: `Deep Learning · Computer Vision & Edge AI`
- **Project Title**: `RecycleNet`
- **Headline / Tagline**: `Deep Learning-Assisted Dynamic Plastic Identification Technique For Automated Waste Segregation`
- **Main Hero Narrative**:
> RecycleNet is an edge-optimized computer vision architecture engineered to automate industrial plastic resin identification in real time across the 6 standard Resin Identification Codes: **PET, HDPE, PVC, LDPE, PP, and PS**. Trained on a completely custom physical dataset of 2,420 high-resolution images and 8,884 bounding boxes, the system achieves a blistering **2.0 ms inference latency** with YOLO26n and **62.0% mAP@50** with RF-DETR transformers. It features a multi-threaded Python Flask & OpenCV desktop inference pipeline alongside a completely offline native Kotlin/Jetpack Compose Android mobile app running PyTorch Lite. Published in IEEE ICCECE 2026.
- **New Main Hero Narrative**:


### Metadata Strip (4 Metrics Boxes)
1. **Role & Scope**:
   - Current: `Lead Researcher & Systems Developer`
   - New: 
2. **Publication & Recognition**:
   - Current: `Published in IEEE ICCECE 2026`
   - New: 
3. **Peak Performance**:
   - Current: `2.0 ms Edge Latency · 62.0% mAP@50`
   - New: 
4. **Frameworks & Stack**:
   - Current: `PyTorch, YOLO26, RF-DETR, OpenCV, Flask, Kotlin, CameraX`
   - New: 

---

### Core Engineering Pillars (Section 1)
- **Section Heading**: `Core Engineering Pillars`
- **Section Subtitle**: `How RecycleNet achieves real-time industrial sorting on commodity edge hardware and zero-cloud smartphones.`

#### Pillar 1
- **Title**: `Custom Dataset & 6 Resin Codes`
- **Description**: `Curated 2,420 unique multi-angle physical images across 8,884 bounding boxes annotated in Roboflow, strictly mapping to the 6 industrial polymer codes: PET, HDPE, PVC, LDPE, PP, and PS.`
- **New Title / Description**:

#### Pillar 2
- **Title**: `2.0 ms Inference Loop (YOLO26n)`
- **Description**: `Benchmarked YOLO26n, YOLOv8s, YOLO26m, and RF-DETR on dual Nvidia T4 GPUs. YOLO26n achieved a blistering 2.0 ms processing turnaround per tensor grid with 58.6% mAP@50.`
- **New Title / Description**:

#### Pillar 3
- **Title**: `Desktop OpenCV & Flask Pipeline`
- **Description**: `Multi-threaded Python Flask microserver paired with an asynchronous OpenCV VideoCapture loop supporting Apple Silicon Metal Performance Shaders (MPS) and Nvidia CUDA.`
- **New Title / Description**:

#### Pillar 4
- **Title**: `Offline Native Android (PyTorch Lite)`
- **Description**: `Smartphone edge client built in native Kotlin with Jetpack Compose (Material 3), Android CameraX live frame analyzer, and compiled PyTorch Lite (.ptl) models for zero-cloud operation.`
- **New Title / Description**:

---

### Deep Dive: Unified Product Narrative (Section 2)

#### Block 1: The Challenge (Limitations of Legacy Industrial Methods)
- **Title**: `The Challenge: Limitations of Legacy Industrial Methods`
- **Lead Text**: `Plastic waste accumulation forms one of the most critical contemporary ecological crises. Sorting municipal waste streams at material recovery facilities remains the core bottleneck. Legacy sorting methods force an unviable trade-off:`
- **Bullet 1 (Manual Labor)**: `Manual Labor Separation: Highly subjective, prone to severe human error, and exposes workers to chemical leachates and biohazardous contaminants on conveyor lines.`
- **Bullet 2 (NIR Spectrometry)**: `Near-Infrared (NIR) Spectrometry: Offers high specificity but requires capital expenditure in excess of tens of thousands of dollars per sensor, restricting automated sorting to only massive centralized plants.`
- **Bullet 3 (The RecycleNet Alternative)**: `The RecycleNet Alternative: Replaces specialized spectrometers with consumer-grade optical cameras and edge neural networks, delivering real-time bounding box regression and polymer classification directly at the sorting line.`
- **New Text for Block 1**:


#### Block 2: Model Benchmarking (Accuracy vs. Inference Latency)
- **Title**: `Model Benchmarking: Accuracy vs. Inference Latency`
- **Lead Text**: `To evaluate deployment trade-offs between processing speed and classification accuracy, four state-of-the-art vision architectures were benchmarked on parallel Nvidia T4 Tensor Core GPUs:`
- **Bullet 1 (YOLO26n)**: `YOLO26n (Ultra-Lightweight Champion): 2.38M parameters, achieving a lightning-fast 2.0 ms inference turnaround and 58.6% mAP@50 — ideal for rapid conveyor belts and mobile devices.`
- **Bullet 2 (RF-DETR)**: `RF-DETR (Peak Accuracy Transformer): Achieves the highest Precision (0.740), Recall (0.591), and 62.0% mAP@50 at an inference loop of 14.8 ms.`
- **Bullet 3 (Progress Over Baseline)**: `Progress Over Baseline: Compared to prior published YOLOv8 models, Precision climbed from 57.4% to 72.3%, Recall rose from 45.5% to 54.2%, and mAP@50 increased from 46.5% to 58.6%.`
- **Bullet 4 (Class-Wise Discrimination)**: `Class-Wise Discrimination: Normalized confusion matrices revealed high discriminability for PET (81%) and LDPE (75%), with YOLO26n exhibiting lower background false-positives than larger models.`
- **New Text for Block 2**:


#### Block 3: Dual Deployment Architecture (Desktop Server & Mobile Client)
- **Title**: `Dual Deployment Architecture: Desktop Server & Mobile Client`
- **Lead Text**: `To bridge research models into operational physical sorting environments, two unified deployment pathways were built:`
- **Bullet 1 (Desktop OpenCV / Flask)**: `Desktop OpenCV / Flask Pipeline: Captures video frames via cv2.VideoCapture, executes forward-propagation tensor inference utilizing Apple Silicon MPS or Nvidia CUDA, and serves a live multipart JPEG stream to an HTML5 dashboard.`
- **Bullet 2 (Native Android App)**: `Native Kotlin Android Mobile App: Built with Jetpack Compose following Material 3 guidelines. Integrates Android CameraX for live continuous frame analysis and runs quantized PyTorch Lite (.ptl) models entirely on-device without any cloud connectivity.`
- **Bullet 3 (Operational Modes)**: `Dual Operational Modes: The mobile app supports both Live Scan Mode (real-time camera feed with confidence thresholding and NMS bounding boxes) and Gallery Mode (single-run static image analysis).`
- **New Text for Block 3**:


#### Block 4: IEEE Publication & Future Hardware Scope
- **Title**: `Published Paper & Physical Sorting Future Scope`
- **Body Text**: `Published in the Proceedings of the 2026 IEEE International Conference on Computing, Electronics & Communications Engineering (ICCECE). Future iterations will integrate the visual detection output directly with Arduino and Raspberry Pi microcontrollers to actuate high-pressure pneumatic air nozzles and mechanical deflector arms, creating a fully automated, low-cost physical sorting conveyor machine.`
- **New Text for Block 4**:


---

### High-Resolution Screen Gallery Captions

1. **Desktop Dashboard** (`Group 9.png`):
   - Current Caption: `RecycleNet - Real-Time Desktop Inference & Live Webcam Stream (PET Bottle Detection)`
   - Current Card Subtitle: `Desktop Live Inference Dashboard`
   - New:

2. **Mobile Main Hero Interface** (`main hero recycle net.png`):
   - Current Caption: `RecycleNet - Intelligent Waste Classifier Mobile Interface`
   - Current Card Subtitle: `Mobile Interface & Live Scanner`
   - New:

3. **Android App Home** (`image 29.png`):
   - Current Caption: `RecycleNet - Native Android Material 3 Mobile Home Interface`
   - Current Card Subtitle: `Mobile Client Home Screen`
   - New:

4. **Android Live Scanner (PVC)** (`image 31.png`):
   - Current Caption: `RecycleNet - Real-Time Mobile CameraX Live Scanner (PVC Detection with 63% Confidence)`
   - Current Card Subtitle: `Mobile Live CameraX Scanner (PVC)`
   - New:

5. **Android Image Analysis (PET)** (`image 32.png`):
   - Current Caption: `RecycleNet - Offline PyTorch Lite Static Image Inspection (PET Bottle Detection with 88% Confidence)`
   - Current Card Subtitle: `Offline Image Analysis (PET 88%)`
   - New:

6. **Model Benchmark Metrics Table** (`download 8.png`):
   - Current Caption: `RecycleNet - Comprehensive Benchmark Metrics Table across YOLO26n, YOLOv8s, YOLO26m, and RF-DETR`
   - Current Card Subtitle: `Model Benchmark Metrics Table`
   - New:

7. **Precision vs. Recall Comparison** (`download 9.png`):
   - Current Caption: `RecycleNet - Precision vs. Recall Comparison Across Evaluated Model Architectures`
   - Current Card Subtitle: `Precision vs. Recall Comparison`
   - New:

8. **Performance Leap from Previous Work** (`download 10.png`):
   - Current Caption: `RecycleNet - Quantitative Progress Comparison from Previous YOLOv8 to Current YOLO26n Architecture`
   - Current Card Subtitle: `Performance Leap from Previous Work`
   - New:

9. **Accuracy vs. Inference Latency** (`image 36.png`):
   - Current Caption: `RecycleNet - Accuracy (mAP@50) vs Inference Latency (ms) Trade-off Curve`
   - Current Card Subtitle: `Accuracy vs. Inference Latency`
   - New:

10. **Accuracy vs. Model Parameter Scale** (`dropped-image 1.png`):
    - Current Caption: `RecycleNet - Accuracy (mAP@50) vs Model Parameter Footprint (Millions of Weights)`
    - Current Card Subtitle: `Accuracy vs. Model Parameter Scale`
    - New:

11. **YOLO26n Normalized Confusion Matrix** (`YOLO26N.png`):
    - Current Caption: `RecycleNet - Normalized Confusion Matrix for Edge-Optimized YOLO26n`
    - Current Card Subtitle: `YOLO26n Normalized Confusion Matrix`
    - New:

12. **Desktop Architecture Flowchart** (`image 34.png`):
    - Current Caption: `RecycleNet - Unified Desktop Architecture Flowchart (Data Preparation, Flask Microserver & OpenCV Loop)`
    - Current Card Subtitle: `Desktop Pipeline Architecture`
    - New:

13. **Mobile Edge Architecture Flowchart** (`image 35.png`):
    - Current Caption: `RecycleNet - Mobile Edge Deployment Flowchart (Kotlin, Jetpack Compose, CameraX & PyTorch Lite)`
    - Current Card Subtitle: `Mobile Edge Flowchart`
    - New:
