// src/media/media-components.js
class MediaComponents {
  // 6.7.1 视频组件样式
  createVideoPlayer(source, options = {}) {
    const player = document.createElement('div');
    player.className = 'yyc-video-player';
    
    // 应用视觉规范
    this.visual.components.applyVideoStyles(player);
    
    // 播放按钮
    const playBtn = document.createElement('button');
    playBtn.innerHTML = '&#9658;'; // 播放图标
    playBtn.className = 'play-button';
    
    // 进度条
    const progress = document.createElement('div');
    progress.className = 'progress-bar';
    
    // 控制栏
    const controls = document.createElement('div');
    controls.className = 'video-controls';
    
    player.appendChild(playBtn);
    player.appendChild(progress);
    player.appendChild(controls);
    
    return player;
  }
  
  // 6.7.2 音频组件样式
  createAudioPlayer(source, options = {}) {
    const player = document.createElement('div');
    player.className = 'yyc-audio-player';
    
    // 应用视觉规范
    this.visual.components.applyAudioStyles(player);
    
    // 音频波形
    const waveform = document.createElement('div');
    waveform.className = 'audio-waveform';
    
    // 播放控制
    const playBtn = document.createElement('button');
    playBtn.innerHTML = '&#9658;';
    
    // 时间显示
    const timeDisplay = document.createElement('div');
    timeDisplay.className = 'time-display';
    
    player.appendChild(waveform);
    player.appendChild(playBtn);
    player.appendChild(timeDisplay);
    
    return player;
  }
}